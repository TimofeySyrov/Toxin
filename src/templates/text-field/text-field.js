import 'inputmask/dist/jquery.inputmask.min';

class TextField {
  constructor(domParent) {
    this.$body = $(domParent).find('.js-text-field__input_masked');

    this._init();
  }

  _init() {
    this.$body.inputmask({
      alias: 'datetime',
      inputFormat: 'dd.mm.yyyy',
      placeholder: 'ДД.ММ.ГГГГ',
    });
  }
}
export default TextField;
