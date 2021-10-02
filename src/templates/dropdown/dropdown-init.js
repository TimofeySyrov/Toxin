import Dropdown from './dropdown';

document.addEventListener('DOMContentLoaded', () => {
  const dropdownDOMs = document.querySelectorAll('.js-dropdown');
  dropdownDOMs.forEach((item) => new Dropdown(item));
});
