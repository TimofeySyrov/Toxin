import Header from '../../templates/header/header';
import RegistrationCard from '../../templates/registration-card/registration-card';
import './sign-up.scss';

class SignUp {
  constructor() {
    this._initComponents();
  }

  _initComponents() {
    const { registrationCard } = this._getDOMElements();

    new Header(document);
    registrationCard.forEach((item) => new RegistrationCard(item));
  }

  _getDOMElements() {
    return {
      registrationCard: document.querySelectorAll('.js-registration-card-item'),
    };
  }
}

export default new SignUp();
