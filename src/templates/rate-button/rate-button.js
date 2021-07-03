import 'jquery-bar-rating/dist/jquery.barrating.min';

class RateButton {
  constructor(element) {
    this.$container = $(element);
    this.findDOMElement();
    this.initPlugin();
  }

  findDOMElement() {
    this.rate_button = this.$container.find('.js-rate-button__container')
    this.valueRating = this.rate_button.attr('data-rating')
    this.valueReadonly = this.rate_button.attr('data-readonly')
  }
  initPlugin() {
    if(this.valueReadonly === 'true') {
      this.valueReadonly=true
    } else {
      this.valueReadonly=false
    }
    
    this.rate_button.barrating({
      theme: 'css-stars',
      showSelectedRating: false,
      initialRating: this.valueRating,
      readonly: this.valueReadonly
    });
  }
}

export default RateButton