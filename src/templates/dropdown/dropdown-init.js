import Dropdown from './dropdown';

document.addEventListener('DOMContentLoaded', () => {
  const dropdown_items = document.querySelectorAll('.js-dropdown');

  dropdown_items.forEach((item) => new Dropdown(item));
});