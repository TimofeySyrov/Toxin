import 'inputmask/dist/jquery.inputmask.min';

class TextField {
  constructor(container) {
    this.$textField = $(container).find('.js-text-field-input');

    this._init();
  }

  _init() {
    const isMaskedTextField = this.$textField.hasClass('text-field__masked');
    
    if (isMaskedTextField) {
      this.$textField.inputmask({
        alias: 'datetime',
        inputFormat: 'dd.mm.yyyy',
        placeholder: 'ДД.ММ.ГГГГ',
      });
    }
  }
}
export default TextField;
