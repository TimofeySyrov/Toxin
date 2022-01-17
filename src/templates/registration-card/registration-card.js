import TextField from '../text-field/text-field';

class RegistrationCard {
  constructor(domParent) {
    this.body = domParent.querySelector('.js-registration-card');
    this.inputs = this.body.querySelectorAll('.js-text-field-component');

    this._init();
  }

  _init() {
    this.inputs.forEach((item) => new TextField(item));
  }
}

export default RegistrationCard;
