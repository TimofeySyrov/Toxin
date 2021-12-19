import StartFilter from '../../templates/start-filter/start-filter';
import RegistrationCard from '../../templates/registration-card/registration-card';
import RoomInfoCard from '../../templates/room-info-card/room-info-card';
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
      cutawayRoomCard,
      loginCard,
    } = this._getDOMElements();

    startFilter.forEach((item) => new StartFilter(item));
    registrationCard.forEach((item) => new RegistrationCard(item));
    roomInfoCard.forEach((item) => new RoomInfoCard(item));
    cutawayRoomCard.forEach((item) => new CutawayRoomCard(item));
    loginCard.forEach((item) => new LoginCard(item));
  }

  _getDOMElements() {
    return {
      startFilter: document.querySelectorAll('.js-start-filter-item'),
      registrationCard: document.querySelectorAll('.js-registartion-card-item'),
      roomInfoCard: document.querySelectorAll('.js-room-info-card-item'),
      cutawayRoomCard: document.querySelectorAll('.js-cutaway-room-card-item'),
      loginCard: document.querySelectorAll('.js-login-card-item'),
    };
  }
}

export default Cards;
