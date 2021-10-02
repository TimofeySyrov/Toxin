import Calendar from '../calendar/calendar';

class FilterDateDropdown {
  constructor(container) {
    this.container = container;
    this.dropInput = this.container.querySelector('.js-filter-date-dropdown__input');
    this.isOpen = this.container.getAttribute('data-calendar-isopen');

    new Calendar(this.container, this.isOpen, this.dropInput);
  }
}

export default FilterDateDropdown;
