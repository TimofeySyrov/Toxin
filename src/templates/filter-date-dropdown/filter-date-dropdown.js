import Calendar from '../calendar/calendar';

class FilterDateDropdown {
  constructor(body) {
    this.body = body;
    this.nameBox = this.body.querySelector('.js-filter-date-dropdown__name-box');
    this.calendarBody = this.body.querySelector('.js-filter-date-dropdown__calendar');
    this.calendarInput = this.body.querySelector('.js-filter-date-dropdown__input');
    this.isCalendarOpen = this.body.getAttribute('data-calendar-isopen');

    this._init();
    this._bindEventListener();
  }

  _init() {
    const isOpen = this.isCalendarOpen === 'true';

    this.calendar = new Calendar({
      body: this.calendarBody,
      isOpen,
      options: {
        dateFormat: 'd M',
        onSelect: (formattedDate) => this._setDates(formattedDate),
      }
    })
  }

  _bindEventListener() {
    this.nameBox.addEventListener('click', this._handleNameBoxClick.bind(this));
  }

  _handleNameBoxClick() {
    this.calendar.checkIsOpen();
  }

  _setDates(dates) {
    const inputPlaceholder = 'Выберите даты';
    const isSelectedDate = (date) => {
      const isUndefined  = date === undefined;
      const isEmpty = date === '';

      if (!isUndefined && !isEmpty) return true;
      return false;
    };

    if (isSelectedDate(dates)) {
      const isRange = dates.indexOf('-') !== -1;
      const lowerCaseDates = dates.toLowerCase();

      if (isRange) {
        const [arrDate, depDate] = lowerCaseDates.split('-');

        this.calendarInput.innerHTML = `${arrDate} - ${depDate}`;
      } else {
        this.calendarInput.innerHTML = lowerCaseDates;
      }
    } else {
      this.calendarInput.innerHTML = inputPlaceholder;
    }
  }
}

export default FilterDateDropdown;
