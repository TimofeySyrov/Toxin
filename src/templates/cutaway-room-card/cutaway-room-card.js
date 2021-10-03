import '../rate-button/rate-button-init';
import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class CutawayRoom {
  constructor(elem) {
    this.container = elem;

    this.findDOMElement();
    this.sliderInit();
    this.bindEventListener();
  }

  findDOMElement() {
    this.sliderBody = $(this.container).find('.js-cutaway-room-card__slider');
    this.cutawayInfoBody = $(this.container).find('.js-cutaway-room-card__info-box');

    this.roomId = this.cutawayInfoBody.find('.js-cutaway-room-card-id');
    this.isLux = this.cutawayInfoBody.find('.js-cutaway-room-card-lux').length;
    this.dayPrice = this.cutawayInfoBody.find('.js-cutaway-room-card-price-of-day');
    this.clearedDayPrice = Number(parseInt(this.dayPrice.html().match(/\d+/)));

    if (this.isLux) {
      this.isLux = true;
    } else this.isLux = false;

    this.convertPrice();
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

  convertPrice() {
    this.dayPrice.html(Number(parseInt(this.dayPrice.html().match(/\d+/))).toLocaleString('ru-RU') + this.dayPrice.html().slice(-1));
  }

  bindEventListener() {
    this.cutawayInfoBody.on('click', this.saveValues.bind(this));
  }

  saveValues() {
    this.roomCard = {
      number: this.roomId.html(),
      isLux: this.isLux,
      price: this.clearedDayPrice,
    };

    if (this.roomId && this.dayPrice) {
      sessionStorage.setItem('CutawayRoom', JSON.stringify(this.roomCard));
      const getRoomCard = JSON.parse(sessionStorage.getItem('CutawayRoom'));

      if (getRoomCard) {
        window.location.href = 'room-details.html';
      }
    }
  }
}

export default CutawayRoom;
