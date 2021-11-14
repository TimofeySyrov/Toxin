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

    this.init();
    this.bindEventListenerInputs();
  }

  notifyObservers(data) {
    this.observers.forEach((observer) => observer(data));
  }

  observeDateChanges(observer) {
    const isCorrectObserver = observer !== undefined && observer !== null;

    if (isCorrectObserver) {
      this.observers.push(observer);
    }
  }

  init() {
    const isOpen = this.isCalendarOpen === 'true';

    this.calendar = new Calendar({
      body: this.calendarBody,
      isOpen,
      options: {
        onSelect: (formattedDate) => this.setDates(formattedDate),
      },
    });
  }

  bindEventListenerInputs() {
    const { calendar } = this;
    const [bodyArrivalInput, bodyDepatureInput] = this.bodyInputs;

    bodyArrivalInput.addEventListener('click', calendar.checkIsOpen.bind(calendar));
    bodyDepatureInput.addEventListener('click', calendar.checkIsOpen.bind(calendar));
  }

  setDates(dates) {
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

    this.notifyObservers(dates);
  }
}
export default DateDropdown;
