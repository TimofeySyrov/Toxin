import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../rate-button/rate-button-init';

class CutawayRoom {
  constructor(elem) {
    this.container = elem;

    this.findDOMElements();
    this.sliderInit();
  }

  findDOMElements() {
    this.sliderBody = $(this.container).find('.js-cutaway-room-card__slider');
  }

  sliderInit() {
    this.sliderBody.slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      arrows: true,
      useCSS: false,
    });
  }
}

export default CutawayRoom;
