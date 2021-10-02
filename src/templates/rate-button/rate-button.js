import 'jquery-bar-rating/dist/jquery.barrating.min';

class RateButton {
  constructor(element) {
    this.$container = $(element);
    this.findDOMElement();
    this.initPlugin();
  }

  findDOMElement() {
    this.$rateButton = this.$container.find('.js-rate-button__container');
    this.$valueRating = this.$rateButton.attr('data-rating');
    this.$valueReadonly = this.$rateButton.attr('data-readonly');
  }

  initPlugin() {
    if (this.$valueReadonly === 'true') {
      this.$valueReadonly = true;
    } else {
      this.$valueReadonly = false;
    }

    this.$rateButton.barrating({
      theme: 'css-stars',
      showSelectedRating: false,
      initialRating: this.valueRating,
      readonly: this.valueReadonly,
    });
  }
}

export default RateButton;
