import LoginCard from '../../templates/login-card/login-card';
import './sign-in.scss';

class SignIn {
  constructor() {
    this._initComponents();
  }

  _initComponents() {
    const { loginCard } = this._getDOMElements();
    this.loginCards = [];

    loginCard.forEach((item) => {
      this.loginCards.push(new LoginCard(item));
    });
  }

  _getDOMElements() {
    return {
      loginCard: document.querySelectorAll('.js-login-card-item'),
    };
  }
}

export default new SignIn();
