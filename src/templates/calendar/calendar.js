import 'air-datepicker';

class Calendar {
  constructor(params) {
    this.$body = $(params.body);
    this.options = params.options || {};
    this.isOpen = false;
    this.firstInitIsOpen = params.isOpen;

    this._init(this.options);
    this._bindEventListenerBtns();
  }

  checkIsOpen() {
    if (this.isOpen) {
      this._hideCalendar();
    } else {
      this._showCalendar();
    }
  }

  _init(options) {
    const defaultOptions = {
      inline: false,
      toggleSelected: true,
      range: true,
      multipleDates: 2,
      multipleDatesSeparator: '-',
      navTitles: {
        days: '<span>MM yyyy</span>',
      },
      dateFormat: 'dd.mm.yyyy',
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
    };
    const mergedOptions = $.extend({}, defaultOptions, options);

    this.$body.datepicker(mergedOptions).data('datepicker');
    this._addCalendarButtons();

    if (this.firstInitIsOpen) {
      this._showCalendar();
    } else {
      this._hideCalendar();
    }
  }

  _addCalendarButtons() {
    const clearBtnTemplate = `
      <div class="calendar__buttons calendar__buttons-clear js-calendar-clear">
        Очистить
      </div>
    `;
    const confirmBtnTemplate = `
      <div class="calendar__buttons calendar__buttons-confirm js-calendar-confirm">
        Применить
      </div>
    `;

    this.$body.find('.datepicker')
      .append('<div class="date-picker-calendar__buttons"></div>');
    this.$body.find('.date-picker-calendar__buttons')
      .append([clearBtnTemplate, confirmBtnTemplate]);
  }

  _bindEventListenerBtns() {
    const $clearBtn = this.$body.find('.js-calendar-clear');
    const $confirmBtn = this.$body.find('.js-calendar-confirm');

    $clearBtn.on('click', this._handleClearBtnClick.bind(this));
    $confirmBtn.on('click', this._handleConfirmBtnClick.bind(this));
  }

  _handleClearBtnClick() {
    this._resetDate();
  }

  _handleConfirmBtnClick() {
    this._hideCalendar();
  }

  _showCalendar() {
    this.$body.show();
    this.isOpen = true;
  }

  _hideCalendar() {
    this.$body.hide();
    this.isOpen = false;
  }

  _resetDate() {
    const calendar = this.$body.data('datepicker');

    calendar.clear();
    calendar.date = new Date();
  }
}

export default Calendar;
