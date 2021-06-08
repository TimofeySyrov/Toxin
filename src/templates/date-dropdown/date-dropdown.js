import Calendar from '../calendar/calendar';

class DateDropdown {
    constructor(container) {
        this.dateDrop = container;
        this.dateDropArrival = this.dateDrop.querySelector(".js-date-dropdown-arrival");
        this.dateDropDepature = this.dateDrop.querySelector(".js-date-dropdown-depature");
        this.isCalOpen = this.dateDrop.getAttribute("data-calendar-isopen");

        new Calendar(this.dateDrop, true, this.isCalOpen, this.dateDropArrival, this.dateDropDepature);
    }
    
}
export default DateDropdown;