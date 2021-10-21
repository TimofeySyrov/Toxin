import Calendar from '../calendar/calendar';

class DateDropdown {
  constructor(body) {
    this.body = body;
    this.calendarBody = this.body.querySelector('.js-date-dropdown__calendar-container');
    this.arrivalInput = this.body.querySelector('.js-date-dropdown-arrival');
    this.depatureInput = this.body.querySelector('.js-date-dropdown-depature');
    this.isCalendarOpen = this.body.getAttribute('data-calendar-isOpen') === 'true';

    this.init();
    this.bindEventListenerInputs();
  }

  init() {
    this.calendar = new Calendar({
      body: this.calendarBody,
      isOpen: true,
      options: {
        onSelect: (formattedDate, date) => this.setDates(date)
      }
    });
  }

  bindEventListenerInputs() {
    const { calendar } = this;

    this.arrivalInput.addEventListener('click', calendar.checkIsOpen.bind(calendar));
    this.depatureInput.addEventListener('click', calendar.checkIsOpen.bind(calendar));
  }

  setDates(dates) {
    const [ arrDate, depDate ] = dates;
    const { arrivalInput, depatureInput } = this;

    arrivalInput.innerHTML = arrDate;
    depatureInput.innerHTML = depDate;
  }
}
export default DateDropdown;
