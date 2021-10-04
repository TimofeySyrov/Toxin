import 'air-datepicker';

class AirCalendar {
  /* options = { isOpen: boolean, inputs: [] } */
  constructor(container, options) {
    this.$container = $(container);
    this.isOpen = options.isOpen || false;
    this.arrivalInput = options.inputs[0];
    this.depatureInput = options.inputs[1];

    this.initDatepicker();
    this.checkIsOpen();
    this.addCalendarButtons();

    this.bindEventListenerCalendarInputs();
    this.bindEventListenerClearCalendarButton();
    this.bindEventListenerConfirmCalendarButton();
  }

  initDatepicker() {
    const $arrivalInput = $(this.arrivalInput);
    const $depatureInput = $(this.depatureInput);
    const isArrivalInput = this.arrivalInput;
    const isDepatureInput = this.depatureInput;
    const isDoubleInputs = isArrivalInput && isDepatureInput;
    const isSingleInput = isArrivalInput && !isDepatureInput;

    const options = {
      inline: false,
      toggleSelected: true,
      range: true,
      multipleDates: 2,
      multipleDatesSeparator: '-',
      navTitles: {
        days: '<span>MM yyyy</span>',
      },
      dateFormat: isDoubleInputs ? 'dd.mm.yyyy' : 'd M',
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      onSelect: function onSelect(selectedDates) {
        const isSelectedDates = selectedDates !== undefined && selectedDates !== '' && selectedDates.indexOf('-') > -1;

        if (isSelectedDates) {
          const dates = selectedDates.split('-');

          if (isSingleInput) {
            $arrivalInput.html(`${dates[0]} - ${dates[1]}`);
          }

          if (isDoubleInputs) {
            $arrivalInput.html(dates[0]);
            $depatureInput.html(dates[1]);
          }
        }
      },
    };

    this.$container.datepicker(options).data('datepicker');
  }

  addCalendarButtons() {
    this.$container.find('.datepicker').append('<div class="date-picker-calendar__buttons"></div>');

    const buttonsContainer = this.$container.find('.date-picker-calendar__buttons');
    buttonsContainer.append('<div class="calendar__buttons calendar__buttons-clear js-calendar-clear">Очистить</div>');
    buttonsContainer.append('<div class="calendar__buttons calendar__buttons-confirm js-calendar-confirm">Применить</div>');
  }

  checkIsOpen() {
    if (this.isOpen) {
      this.showCalendar();
    } else {
      this.hideCalendar();
    }
  }

  bindEventListenerCalendarInputs() {
    $(this.arrivalInput).parent().on('click', this.calendarInputs.bind(this));
    $(this.depatureInput).parent().on('click', this.calendarInputs.bind(this));
  }

  calendarInputs() {
    if (this.isOpen) {
      this.isOpen = false;
      this.$container.hide();
    } else {
      this.isOpen = true;
      this.$container.show();
    }
  }

  showCalendar() {
    this.$container.show();
  }

  clearAllCalendar() {
    const myD = this.$container.data('datepicker');
    const isArrivalInput = this.arrivalInput;
    const isDepatureInput = this.depatureInput;
    const isDoubleInputs = isArrivalInput && isDepatureInput;
    const isSingleInput = isArrivalInput && !isDepatureInput;

    myD.clear();

    if (isSingleInput) {
      $(this.arrivalInput).html('Выберите даты');
    }

    if (isDoubleInputs) {
      $(this.arrivalInput).html('ДД.ММ.ГГГГ');
      $(this.depatureInput).html('ДД.ММ.ГГГГ');
    }
  }

  bindEventListenerClearCalendarButton() {
    const clearb = this.$container.find('.js-calendar-clear');

    clearb.on('click', this.clearAllCalendar.bind(this));
  }

  hideCalendar() {
    this.$container.hide();
  }

  bindEventListenerConfirmCalendarButton() {
    const clearb = this.$container.find('.js-calendar-confirm');

    clearb.on('click', this.calendarInputs.bind(this));
  }
}

export default AirCalendar;
