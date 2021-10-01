import Calendar from '../calendar/calendar';

class FilterDateDropdown {
  constructor(container) {
    this.dateDrop = container;

    this.dropInput = this.dateDrop.querySelector(".js-filter-date-dropdown__input");

    this.isOpen = this.dateDrop.getAttribute("data-calendar-isopen");

    new Calendar(this.dateDrop, this.isOpen, this.dropInput);
  }
  
}
export default FilterDateDropdown;