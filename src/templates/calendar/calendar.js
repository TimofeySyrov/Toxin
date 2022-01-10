import 'air-datepicker';

class Calendar {
  constructor(params) {
    this.$body = $(params.body).find('.js-calendar');
    this.options = params.options || {};
    this.isOpen = false;
    this.firstInitIsOpen = params.isOpen;
    this.observers = [];

    this._init(this.options);
    this._bindEventListenerBtns();
  }

  checkIsOpen() {
    if (this.isOpen) {
      this.hideCalendar();
    } else {
      this.showCalendar();
    }
  }

  showCalendar() {
    this.$body.show();
    this.isOpen = true;
  }

  hideCalendar() {
    this.$body.hide();
    this.isOpen = false;
  }

  observeShowCalendarEvent(observer) {
    const isCorrectObserver = observer !== undefined && observer !== null;

    if (isCorrectObserver) {
      this.observers.push(observer);
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
      this.showCalendar();
    } else {
      this.hideCalendar();
    }
  }

  _notifyObservers(data) {
    this.observers.forEach((observer) => observer(data));
  }

  _addCalendarButtons() {
    const clearBtnTemplate = `
      <div data-button-type="clear" class="calendar__buttons calendar__button">
        Очистить
      </div>
    `;
    const confirmBtnTemplate = `
      <div data-button-type="confirm" class="calendar__buttons calendar__button">
        Применить
      </div>
    `;
    const $datepicker = this.$body.find('.datepicker');
    const $buttons = $datepicker.find('.calendar__buttons');
    const isHaveButtons = $buttons.length > 0;

    if (!isHaveButtons) {
      $datepicker.append('<div class="calendar__buttons"></div>');
      this.$body
        .find('.calendar__buttons')
        .append([clearBtnTemplate, confirmBtnTemplate]);
    }
  }

  _bindEventListenerBtns() {
    const $clearBtn = this.$body.find('[data-button-type="clear"]');
    const $confirmBtn = this.$body.find('[data-button-type="confirm"]');

    $clearBtn.on('click', this._handleClearBtnClick.bind(this));
    $confirmBtn.on('click', this._handleConfirmBtnClick.bind(this));
  }

  _handleClearBtnClick() {
    this._resetDate();
  }

  _handleConfirmBtnClick() {
    this.hideCalendar();
    this._notifyObservers({ isOpen: this.isOpen });
  }

  _resetDate() {
    const calendar = this.$body.data('datepicker');

    calendar.clear();
    calendar.date = new Date();
  }
}

export default Calendar;
