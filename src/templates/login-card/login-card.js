import TextField from '../text-field/text-field';

class LoginCard {
  constructor(domParent) {
    this.body = domParent.querySelector('.js-login-card');
    this.inputs = this.body.querySelectorAll('[data-component-name="text-field"]');

    this._init();
  }

  _init() {
    this.inputs.forEach((item) => new TextField(item));
  }
}

export default LoginCard;
