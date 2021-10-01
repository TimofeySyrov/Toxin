import '../rate-button/rate-button-init';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class CutawayRoom{
  constructor(elem){
    this.container = elem;

    this.findDOMElement();
    this.sliderInit();
    this.cutaway_eventListener();
    
  }

  findDOMElement(){
    this.sliderBody = $(this.container).find('.js-cutaway-room-card__slider');
    this.cutawayInfoBody = $(this.container).find('.js-cutaway-room-card__info-box');

    this.room_number = this.cutawayInfoBody.find('.js-cutaway-room-card-id');
    this.is_lux = this.cutawayInfoBody.find('.js-cutaway-room-card-lux').length;
    this.price_day = this.cutawayInfoBody.find('.js-cutaway-room-card-price-of-day');
    this.cleared_price_day = Number(parseInt(this.price_day.html().match(/\d+/)));

    if(this.is_lux){
      this.is_lux = true;
    } else this.is_lux = false;

    this.convertPrice();
  }

  sliderInit(){
    this.sliderBody.slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      arrows: true,
      useCSS: false,
    });
  }

  convertPrice(){
    this.price_day.html(Number(parseInt(this.price_day.html().match(/\d+/))).toLocaleString('ru-RU')+this.price_day.html().slice(-1));
  }

  cutaway_eventListener(){
    this.cutawayInfoBody.on('click', this.saveValues.bind(this));
  }

  saveValues(){
    this.info_about_room = {
      number: this.room_number.html(),
      isLux: this.is_lux,
      price: this.cleared_price_day
    };

    if(this.room_number && this.price_day){
      sessionStorage.setItem('CutawayRoom', JSON.stringify(this.info_about_room));
      var get_room_info = JSON.parse(sessionStorage.getItem('CutawayRoom'));
      
      if(get_room_info){
        window.location.href = 'room-details.html';
      }
    }
    
  }
}

export default CutawayRoom;