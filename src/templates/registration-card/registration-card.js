import TextField from '../text-field/text-field';

class RegistrationCard {
  constructor(domParent) {
    this.body = domParent.querySelector('.js-registration-card');
    this.inputs = this.body.querySelectorAll('[data-component-name="text-field"]');

    this._init();
  }

  _init() {
    this.inputs.forEach((item) => new TextField(item));
  }
}

export default RegistrationCard;
