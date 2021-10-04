import Calendar from '../calendar/calendar';

class FilterDateDropdown {
  constructor(container) {
    this.container = container;
    this.calendarBody = this.container.querySelector('.js-filter-date-dropdown__calendar');
    this.calendarInput = this.container.querySelector('.js-filter-date-dropdown__input');
    this.isCalendarOpen = Boolean.prototype.valueOf(this.container.getAttribute('data-calendar-isopen'));

    new Calendar(this.calendarBody, {
      isOpen: this.isCalendarOpen,
      inputs: [this.calendarInput],
    });
  }
}

export default FilterDateDropdown;
