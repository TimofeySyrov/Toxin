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

    this.startFilters = startFilter.map((item) => new StartFilter(item));
    this.registrationCards = registrationCard.map((item) => (
      new RegistrationCard(item)
    ));
    this.roomInfoCards = roomInfoCard.map((item) => new RoomInfoCard(item));
    this.cutawayRoomCards = cutawayRoomCard.map((item) => (
      new CutawayRoomCard(item)
    ));
    this.loginCards = loginCard.map((item) => new LoginCard(item));
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

export default new Cards();
