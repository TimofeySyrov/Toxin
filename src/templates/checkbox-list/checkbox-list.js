class CheckboxList {
  constructor(domParent) {
    this.container = domParent.querySelector('.js-checkbox-list');
    this.checkboxNameContainer = this.container.querySelector('.js-checkbox-list__name');
    this.checkboxArrow = this.container.querySelector('.js-checkbox-list__arrow');
    this.checkboxMenu = this.container.querySelector('.js-checkbox-list__menu');

    this._bindEventListener();
  }

  _bindEventListener() {
    this.checkboxNameContainer.addEventListener('click', this._handleCheckboxNameContainerClick.bind(this));
  }

  _handleCheckboxNameContainerClick() {
    this._checkIsOpen();
  }

  _checkIsOpen() {
    this.checkboxMenu.classList.toggle('checkbox-list__menu_active');
    this.checkboxArrow.classList.toggle('checkbox-list__arrow_active');
  }
}

export default CheckboxList;
