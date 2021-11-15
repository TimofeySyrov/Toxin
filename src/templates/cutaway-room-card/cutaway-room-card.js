import 'slick-carousel/slick/slick.min';

import '../rate-button/rate-button-init';

class CutawayRoom {
  constructor(elem) {
    this.$container = $(elem);
    this.$sliderBody = this.$container.find('.js-cutaway-room-card__slider');

    this._initImageSlider();
  }

  _initImageSlider() {
    this.$sliderBody.slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      arrows: true,
      useCSS: false,
    });
  }
}

export default CutawayRoom;
