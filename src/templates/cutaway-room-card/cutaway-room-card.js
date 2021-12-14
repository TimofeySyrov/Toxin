import 'slick-carousel/slick/slick.min';

import RateButton from '../rate-button/rate-button';

class CutawayRoomCard {
  constructor(domParent) {
    this.$body = $(domParent).find('.js-cutaway-room-card');
    this.$slider = this.$body.find('.js-cutaway-room-card__slider');

    this._init();
  }

  _init() {
    this._initComponents();
    this._initSlickSlider();
  }

  _initComponents() {
    const { $body } = this;
    this.rateButton = new RateButton($body);
  }

  _initSlickSlider() {
    this.$slider.slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      arrows: true,
      useCSS: false,
    });
  }
}

export default CutawayRoomCard;
