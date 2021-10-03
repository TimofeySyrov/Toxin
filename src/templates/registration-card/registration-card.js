import '../text-field/text-field-init';

class RegCard {
  constructor(elem) {
    this.$container = $(elem);

    this.init();
    this.bindEventListener();
  }

  init() {
    this.$firstNameСontainer = this.$container.find('.js-registration-card-first-name');
    this.$lastNameСontainer = this.$container.find('.js-registration-card-last-name');
    this.$emailСontainer = this.$container.find('.js-registration-card-email');
    this.$passwordСontainer = this.$container.find('.js-registration-card-password');
    this.$registerButton = this.$container.find('.js-registration-card-registr');

    this.listToSafe = [
      this.$firstNameСontainer,
      this.$$lastNameСontainer,
      this.$emailСontainer,
      this.$passwordСontainer,
    ];
  }

  getElementsChanges() {
    let uFirstName,
      uLastName,
      uEmail,
      uPassword;

    this.listToSafe.forEach((item) => {
      const $itemBody = item.find('input.text-field__input');
      const itemValue = $itemBody.val();

      if (itemValue) {
        if (item.hasClass('js-registration-card-first-name')) {
          uFirstName = itemValue;
        } else if (item.hasClass('js-registration-card-last-name')) {
          uLastName = itemValue;
        } else if (item.hasClass('js-registration-card-email')) {
          uEmail = itemValue;
        } else if (item.hasClass('js-registration-card-password')) {
          uPassword = itemValue;
        }
      }
    });

    if (uFirstName && uLastName && uEmail && uPassword) {
      const arr = [uEmail, uPassword, uFirstName, uLastName];

      localStorage.setItem(uEmail, JSON.stringify(arr));
    } else {
      alert('Вы пропустили одну из форм! Заполните её');
    }
  }

  bindEventListener() {
    this.$registerButton.on('click', this.getElementsChanges.bind(this));
  }
}

export default RegCard;
