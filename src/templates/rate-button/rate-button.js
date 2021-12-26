import 'jquery-bar-rating/dist/jquery.barrating.min';

class RateButton {
  constructor(domParent) {
    this.$container = $(domParent).find('.js-rate-button');

    this._findDOMElements();
    this._init();
  }

  _findDOMElements() {
    this.$rateButton = this.$container.find('[data-rate-body]');
    this.valueRating = this.$rateButton.attr('data-rating');
    this.valueReadonly = this.$rateButton.attr('data-readonly');
  }

  _init() {
    const isReadonly = this.valueReadonly === 'true';

    this.$rateButton.barrating({
      theme: 'css-stars',
      showSelectedRating: false,
      initialRating: parseInt(this.valueRating),
      readonly: isReadonly,
    });

    if (isReadonly) {
      this.$container.addClass('rate-button_readonly');
    }
  }
}

export default RateButton;
