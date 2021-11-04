import Calendar from '../calendar/calendar';

class DateDropdown {
  constructor(body) {
    this.body = body;
    this.calendarBody = this.body.querySelector('.js-date-dropdown__calendar-container');
    this.arrivalInput = this.body.querySelector('.js-date-dropdown-arrival');
    this.depatureInput = this.body.querySelector('.js-date-dropdown-depature');
    this.isCalendarOpen = Boolean.prototype.valueOf(this.body.getAttribute('data-calendar-isOpen'));

    this.init();
    this.bindEventListenerInputs();
  }

  init() {
    this.calendar = new Calendar({
      body: this.calendarBody,
      isOpen: this.isCalendarOpen,
      options: {
        onSelect: (formattedDate) => this.setDates(formattedDate)
      }
    });
  }

  bindEventListenerInputs() {
    const { calendar } = this;

    this.arrivalInput.addEventListener('click', calendar.checkIsOpen.bind(calendar));
    this.depatureInput.addEventListener('click', calendar.checkIsOpen.bind(calendar));
  }

  setDates(dates) {
    const { arrivalInput, depatureInput } = this;
    const inputPlaceholder = 'ДД.ММ.ГГГГ'.toUpperCase();
    const isSelectedDate = (date) => {
      const isUndefined  = date === undefined;
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
  }
}
export default DateDropdown;
