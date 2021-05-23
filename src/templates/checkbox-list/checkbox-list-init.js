import CheckboxList from './checkbox-list';

document.addEventListener('DOMContentLoaded', () => {
    const checkbox_list = document.querySelectorAll('.js-checkbox-list');

    checkbox_list.forEach((item) => new CheckboxList(item));
});