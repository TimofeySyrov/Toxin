import Header from '../../templates/header/header';
import LoginCard from '../../templates/login-card/login-card';
import './sign-in.scss';

class SignIn {
  constructor() {
    this._initComponents();
  }

  _initComponents() {
    const { loginCard } = this._getDOMElements();

    new Header(document);
    loginCard.forEach((item) => new LoginCard(item));
  }

  _getDOMElements() {
    return {
      loginCard: document.querySelectorAll('.js-login-card-item'),
    };
  }
}

export default new SignIn();
