import Calendar from '../calendar/calendar';

class DateDropdown {
  constructor(container) {
    this.container = container;
    this.calendarBody = this.container.querySelector('.js-date-dropdown__calendar-container');
    this.arrivalInput = this.container.querySelector('.js-date-dropdown-arrival');
    this.depatureInput = this.container.querySelector('.js-date-dropdown-depature');
    this.isCalendarOpen = Boolean.prototype.valueOf(this.container.getAttribute('data-calendar-isOpen'));

    this.init();
  }

  init() {
    new Calendar(this.calendarBody, {
      isOpen: this.isCalendarOpen,
      inputs: [this.arrivalInput, this.depatureInput],
    });
  }
}
export default DateDropdown;
