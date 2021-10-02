import Calendar from '../calendar/calendar';

class FilterDateDropdown {
  constructor(container) {
    this.container = container;
    this.dropInput = this.dateDrop.querySelector('.js-filter-date-dropdown__input');
    this.isOpen = this.dateDrop.getAttribute('data-calendar-isopen');

    new Calendar(this.container, this.isOpen, this.dropInput);
  }
}

export default FilterDateDropdown;
