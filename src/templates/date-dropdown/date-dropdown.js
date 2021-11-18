import Calendar from '../calendar/calendar';

class DateDropdown {
  constructor(body) {
    this.body = body;
    this.calendarBody = this.body.querySelector('.js-date-dropdown__calendar-container');
    this.bodyInputs = this.body.querySelectorAll('.js-date-dropdown__input');
    this.arrivalInput = this.body.querySelector('.js-date-dropdown-arrival');
    this.depatureInput = this.body.querySelector('.js-date-dropdown-depature');
    this.isCalendarOpen = this.body.getAttribute('data-calendar-isOpen');
    this.observers = [];

    this._init();
    this._bindEventListenerInputs();
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

  _bindEventListenerInputs() {
    const [bodyArrivalInput, bodyDepatureInput] = this.bodyInputs;

    bodyArrivalInput.addEventListener('click', this._handleInputClick.bind(this));
    bodyDepatureInput.addEventListener('click', this._handleInputClick.bind(this));
  }

  _handleInputClick() {
    this.calendar.checkIsOpen();
  }

  _notifyObservers(data) {
    this.observers.forEach((observer) => observer(data));
  }

  _setDates(dates) {
    const { arrivalInput, depatureInput } = this;
    const inputPlaceholder = 'ДД.ММ.ГГГГ'.toUpperCase();
    const isSelectedDate = (date) => {
      const isUndefined = date === undefined;
      const isEmpty = date === '';

      if (!isUndefined && !isEmpty) return true;
      return false;
    };

    if (isSelectedDate(dates)) {
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
}
export default DateDropdown;
