import CheckboxList from './checkbox-list';

document.addEventListener('DOMContentLoaded', () => {
  const checkboxListDOMs = document.querySelectorAll('.js-checkbox-list');
  
  checkboxListDOMs.forEach((item) => new CheckboxList(item));
});
