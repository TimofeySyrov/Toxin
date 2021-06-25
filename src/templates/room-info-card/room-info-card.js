import '../date-dropdown/date-dropdown-init';
import '../dropdown/dropdown-init';

class RoomMainCard {
    constructor(elem) {
        this.container = $(elem);

        this.findDOMElements();
        this.setInfoCutawayCurrentRoom();

    }

    findDOMElements(){
        this.room_id = this.container.find('.js-room-main-card__id');
        this.room_isLux = this.container.find('.js-room-main-card__lux');
        this.room_dayPrice = this.container.find('.js-room-main-card__price');
        this.room_calcStartPrice = this.container.find('.js-room-main-card__calc-start-price');
        this.room_serviceFirstPrice = this.container.find('.js-room-main-card__service-first');
        this.room_serviceSecondPrice = this.container.find('.js-room-main-card__service-second');
        this.room_endPrice = this.container.find('.js-room-main-card__end-price');
    }

    setInfoCutawayCurrentRoom(){
        var currentRoom = JSON.parse(sessionStorage.getItem('CutawayRoom'));

        this.set_roomID(currentRoom);
        this.set_Lux(currentRoom);
        this.set_DayPrice(currentRoom);
        this.set_endPrice(currentRoom);
    }

    set_roomID(curr){
        this.room_id.html(curr.number);
    }

    set_Lux(curr){
        console.log(curr.isLux)
        if(curr.isLux){
            if(!this.room_isLux.hasClass('room-main-card__tittle-room-info-lux--active')){
                this.room_isLux.addClass('room-main-card__tittle-room-info-lux--active');
            }
        } else {
            if(this.room_isLux.hasClass('room-main-card__tittle-room-info-lux--active')){
                this.room_isLux.removeClass('room-main-card__tittle-room-info-lux--active');
            }
        }
    }

    set_DayPrice(curr){
        for(const item of this.room_dayPrice){
            $(item).html(Number(curr.price).toLocaleString('ru-RU'));
        }
    }

    set_endPrice(curr){
        var price_firstService = Number((this.room_serviceFirstPrice.html().replace(/\s/g, '')).match(/\d+/));
        var price_secondService = Number(this.room_serviceSecondPrice.html().match(/\d+/));
        var calc_price = Number(curr.price)*4;
        var price_end = (calc_price-price_firstService)+price_secondService;

        this.room_calcStartPrice.html(calc_price.toLocaleString('ru-RU'));
        this.room_endPrice.html(price_end.toLocaleString('ru-RU'));
    }
}

export default RoomMainCard;