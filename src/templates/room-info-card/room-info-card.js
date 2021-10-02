import '../date-dropdown/date-dropdown-init';
import '../dropdown/dropdown-init';

class RoomMainCard {
  constructor(elem) {
    this.$container = $(elem);

    this.findRoomDOMElements();
    this.setInfoCutawayCurrentRoom();
  }

  findRoomDOMElements() {
    this.$id = this.$container.find('.js-room-info-card__id');
    this.$isLux = this.$container.find('.js-room-info-card__lux');
    this.$dayPrice = this.$container.find('.js-room-info-card__price');
    this.$calcStartPrice = this.$container.find('.js-room-info-card__calc-start-price');
    this.$serviceFirstPrice = this.$container.find('.js-room-info-card__service-first');
    this.$serviceSecondPrice = this.$container.find('.js-room-info-card__service-second');
    this.$endPrice = this.$container.find('.js-room-info-card__end-price');
  }

  setInfoCutawayCurrentRoom() {
    const currentRoom = JSON.parse(sessionStorage.getItem('CutawayRoom'));

    if (currentRoom) {
      this.setRoomID(currentRoom);
      this.setLux(currentRoom);
      this.setDayPrice(currentRoom);
      this.setEndPrice(currentRoom);
    }
  }

  setRoomID(current) {
    this.$id.html(current.number);
  }

  setLux(current) {
    if (current.isLux) {
      if (!this.$isLux.hasClass('room-info-card__number-lux--active')) {
        this.$isLux.addClass('room-info-card__number-lux--active');
      }
    } else if (this.isRoomLux.hasClass('room-info-card__number-lux--active')) {
      this.isRoomLux.removeClass('room-info-card__number-lux--active');
    }
  }

  setDayPrice(current) {
    this.$dayPrice.forEach((item) => {
      $(item).html(Number(current.price).toLocaleString('ru-RU'));
    });
  }

  setEndPrice(current) {
    const priceFirstService = Number((this.$serviceFirstPrice.html().replace(/\s/g, '')).match(/\d+/));
    const priceSecondService = Number(this.$serviceSecondPrice.html().match(/\d+/));
    const calcPrice = Number(current.price) * 4;
    const priceEnd = (calcPrice - priceFirstService) + priceSecondService;

    this.$calcStartPrice.html(calcPrice.toLocaleString('ru-RU'));
    this.$endPrice.html(priceEnd.toLocaleString('ru-RU').replace(' ', '&nbsp;'));
  }
}

export default RoomMainCard;
