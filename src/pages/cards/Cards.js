import StartFilter from '../../templates/start-filter/start-filter';
import RegistrationCard from '../../templates/registration-card/registration-card';
import RoomInfoCard from '../../templates/room-info-card/room-info-card';
import Calendar from '../../templates/calendar/calendar';
import CutawayRoomCard from '../../templates/cutaway-room-card/cutaway-room-card';
import LoginCard from '../../templates/login-card/login-card';
import './cards.scss';

class Cards {
  constructor() {
    this._initComponents();
  }

  _initComponents() {
    const {
      startFilter,
      registrationCard,
      roomInfoCard,
      calendar,
      cutawayRoomCard,
      loginCard,
    } = this._getDOMElements();

    new Calendar({
      body: calendar,
      isOpen: true,
    });
    startFilter.forEach((item) => new StartFilter(item));
    registrationCard.forEach((item) => new RegistrationCard(item));
    roomInfoCard.forEach((item) => new RoomInfoCard(item));
    cutawayRoomCard.forEach((item) => new CutawayRoomCard(item));
    loginCard.forEach((item) => new LoginCard(item));
  }

  _getDOMElements() {
    return {
      calendar: document.querySelector('.js-cards-hero__item_option_calendar'),
      startFilter: document.querySelectorAll('.js-cards-hero__item_option_start-filter'),
      registrationCard: document.querySelectorAll('.js-cards-hero__item_option_registration'),
      roomInfoCard: document.querySelectorAll('.js-cards-hero__item_option_room-card'),
      cutawayRoomCard: document.querySelectorAll('.js-cards-hero__item_option_cutaway-room'),
      loginCard: document.querySelectorAll('.js-cards-hero__item_option_login-card'),
    };
  }
}

export default Cards;
