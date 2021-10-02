class LoginCard {
  constructor(elem) {
    this.$container = $(elem);

    this.$emailInput = this.$container.find('.js-login-card-email');
    this.$passwordInput = this.$container.find('.js-login-card-password');
    this.$loginBtn = this.$container.find('.js-login-card-login-btn');

    this.listToSafe = [
      this.$emailInput,
      this.$passwordInput,
    ];

    this.bindEventListener();
  }

  checkLoginInputs() {
    let uEmail,
      uPassword;

    for (const item of this.listToSafe) {
      const $itemBody = item.find('input.text-field__input');
      const itemValue = $($itemBody).val();

      if ($itemBody) {
        if (item.hasClass('js-login-card-email')) {
          uEmail = itemValue;
        } else if (item.hasClass('js-login-card-password')) {
          uPassword = itemValue;
        }
      }
    }

    if (uEmail && uPassword) {
      const uInfo = JSON.parse(localStorage.getItem(uEmail));

      if (uInfo) {
        if (uInfo[1] === uPassword) {
          window.location.href = 'index.html';
        } else {
          alert(`Пароль введен неверно! Пароль: ${uInfo[1]}`);
        }
      } else {
        alert('Аккаунт с такой почтой не существует!');
      }
    } else {
      alert('Вы пропустили одну из форм! Заполните её');
    }
  }

  bindEventListener() {
    $(this.$loginBtn).on('click', this.checkLoginInputs.bind(this));
  }
}

export default LoginCard;
