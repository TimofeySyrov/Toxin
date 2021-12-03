import 'inputmask/dist/jquery.inputmask.min';

class TextField {
  constructor(body) {
    this.$body = $(body);

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
