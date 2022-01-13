import Calendar from '../calendar/calendar';

class FilterDateDropdown {
  constructor(domParent) {
    this.body = domParent.querySelector('.js-filter-date-dropdown');
    this.nameBox = this.body.querySelector('.js-filter-date-dropdown__name');
    this.calendarBody = this.body.querySelector('.js-filter-date-dropdown__calendar');
    this.calendarInput = this.body.querySelector('[data-placeholder-type="dropdown-name"]');
    this.inputArrow = this.body.querySelector('.js-filter-date-dropdown__icon');
    this.isCalendarOpen = this.body.getAttribute('data-is-open');

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
      },
    });
  }

  _bindEventListener() {
    window.addEventListener('click', this._handleWindowClick.bind(this), true);
    this.nameBox.addEventListener('click', this._handleNameBoxClick.bind(this));
    this.calendar.observeShowCalendarEvent(this._rotateArrow.bind(this));
  }

  _handleWindowClick(event) {
    const { target } = event;
    const clickOnDropdown = this.body.contains(target);
    const isOpenCalendar = this.calendar.isOpen;

    if (!clickOnDropdown && isOpenCalendar) {
      this.calendar.hideCalendar();
      this._rotateArrow();
    }
  }

  _handleNameBoxClick() {
    this.calendar.checkIsOpen();
    this._rotateArrow();
  }

  _setDates(dates) {
    const inputPlaceholder = 'Выберите даты';
    const isSelectedDate = dates !== undefined && dates !== '';

    if (isSelectedDate) {
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

  _rotateArrow() {
    this.inputArrow.classList.toggle('filter-date-dropdown__icon_active');
  }
}

export default FilterDateDropdown;
