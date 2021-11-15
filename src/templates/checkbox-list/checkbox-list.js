class CheckboxList {
  constructor(container) {
    this.container = container;
    this.checkboxNameContainer = this.container.querySelector('.js-checkbox-list__name');
    this.checkboxArrow = this.container.querySelector('.js-checkbox-list__arrow');
    this.checkboxMenu = this.container.querySelector('.js-checkbox-list__menu');

    this._bindEventListener();
  }

  _bindEventListener() {
    this.checkboxNameContainer.addEventListener('click', this._checkIsOpen.bind(this));
  }

  _checkIsOpen() {
    const isActive = this.checkboxMenu.classList.contains('checkbox-list__menu_active');
    
    if (isActive) {
      this.checkboxMenu.classList.remove('checkbox-list__menu_active');
      this.checkboxArrow.classList.remove('checkbox-list__arrow_active');
    } else {
      this.checkboxMenu.classList.toggle('checkbox-list__menu_active');
      this.checkboxArrow.classList.toggle('checkbox-list__arrow_active');
    }
  }
}

export default CheckboxList;
