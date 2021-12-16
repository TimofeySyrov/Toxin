import RegistrationCard from '../../templates/registration-card/registration-card';
import './sign-up.scss';

class SignUp {
  constructor() {
    this._initComponents();
  }

  _initComponents() {
    const { registrationCard } = this._getDOMElements();
    this.registrationCards = [];

    registrationCard.forEach((item) => {
      this.registrationCards.push(new RegistrationCard(item));
    });
  }

  _getDOMElements() {
    return {
      registrationCard: document.querySelectorAll('.js-registration-card-item'),
    };
  }
}

export default new SignUp();
