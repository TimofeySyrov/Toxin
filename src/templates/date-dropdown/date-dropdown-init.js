import DateDropdown from './date-dropdown';

const dateDropdownDOMs = document.querySelectorAll('.js-date-dropdown');
dateDropdownDOMs.forEach((item) => new DateDropdown(item));
