import Calendar from '../calendar/calendar';

class DateDropdown {
  constructor(domParent) {
    this.body = domParent.querySelector('.js-date-dropdown');
    this.calendarBody = this.body.querySelector('.js-date-dropdown__calendar-container');
    this.bodyInputs = this.body.querySelectorAll('.js-date-dropdown__input');
    this.arrivalInput = this.body.querySelector('[data-input-type="arrival"]');
    this.depatureInput = this.body.querySelector('[data-input-type="depature"]');
    this.inputArrows = this.body.querySelectorAll('.js-date-dropdown__arrow');
    this.isCalendarOpen = this.body.getAttribute('data-is-open');
    this.observers = [];

    this._init();
    this._bindEventListener();
  }

  observeDateChanges(observer) {
    const isCorrectObserver = observer !== undefined && observer !== null;

    if (isCorrectObserver) {
      this.observers.push(observer);
    }
  }

  _init() {
    const isOpen = this.isCalendarOpen === 'true';

    this.calendar = new Calendar({
      body: this.calendarBody,
      isOpen,
      options: {
        onSelect: (formattedDate) => this._setDates(formattedDate),
      },
    });
  }

  _bindEventListener() {
    const [bodyArrivalInput, bodyDepatureInput] = this.bodyInputs;
    const { calendar } = this;

    window.addEventListener('click', this._handleWindowClick.bind(this), true);
    bodyArrivalInput.addEventListener('click', this._handleInputClick.bind(this));
    bodyDepatureInput.addEventListener('click', this._handleInputClick.bind(this));
    calendar.observeShowCalendarEvent(this._rotateArrows.bind(this));
  }

  _handleWindowClick(event) {
    const { target } = event;
    const clickOnDropdown = this.body.contains(target);
    const isOpenCalendar = this.calendar.isOpen;

    if (!clickOnDropdown && isOpenCalendar) {
      this.calendar.hideCalendar();
      this._rotateArrows();
    }
  }

  _handleInputClick() {
    this.calendar.checkIsOpen();
    this._rotateArrows();
  }

  _notifyObservers(data) {
    this.observers.forEach((observer) => observer(data));
  }

  _setDates(dates) {
    const { arrivalInput, depatureInput } = this;
    const inputPlaceholder = 'ДД.ММ.ГГГГ'.toUpperCase();
    const isSelectedDate = dates !== undefined && dates !== '';

    if (isSelectedDate) {
      const isRange = dates.indexOf('-') !== -1;

      if (isRange) {
        const [arrDate, depDate] = dates.split('-');

        arrivalInput.innerHTML = arrDate;
        depatureInput.innerHTML = depDate;
      } else {
        arrivalInput.innerHTML = dates;
      }
    } else {
      arrivalInput.innerHTML = inputPlaceholder;
      depatureInput.innerHTML = inputPlaceholder;
    }

    this._notifyObservers(dates);
  }

  _rotateArrows() {
    this.inputArrows.forEach((arrow) => {
      arrow.classList.toggle('date-dropdown__arrow_active');
    });
  }
}
export default DateDropdown;
