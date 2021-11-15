import 'jquery-bar-rating/dist/jquery.barrating.min';

class RateButton {
  constructor(element) {
    this.$container = $(element);
    
    this._findDOMElements();
    this._init();
  }

  _findDOMElements() {
    this.$rateButton = this.$container.find('.js-rate-button__container');
    this.valueRating = this.$rateButton.attr('data-rating');
    this.valueReadonly =  this.$rateButton.attr('data-readonly');
  }

  _init() {
    const isReadonly = this.valueReadonly === 'true';

    this.$rateButton.barrating({
      theme: 'css-stars',
      showSelectedRating: false,
      initialRating: parseInt(this.valueRating),
      readonly: isReadonly,
    });
  }
}

export default RateButton;
