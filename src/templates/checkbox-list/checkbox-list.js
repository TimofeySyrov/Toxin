class CheckboxList {
  constructor(container) {
    this.container = container;
    this.findDomElement();
    this.bindEventListener();
  }

  findDomElement() {
    this.checkboxNameContainer = this.container.querySelector('.js-checkbox-list__name');
    this.checkboxArrow = this.container.querySelector('.js-checkbox-list__arrow');
    this.checkboxMenu = this.container.querySelector('.js-checkbox-list__menu');
  }

  bindEventListener() {
    this.checkboxNameContainer.addEventListener('click', this.handlerCheckboxMenu.bind(this));
  }

  handlerCheckboxMenu() {
    if(this.checkboxMenu.classList.contains('checkbox-list__menu_active')) {
      this.checkboxMenu.classList.remove('checkbox-list__menu_active');
      this.checkboxArrow.classList.remove('checkbox-list__arrow_active');
    } else {
      this.checkboxMenu.classList.toggle('checkbox-list__menu_active');
      this.checkboxArrow.classList.toggle('checkbox-list__arrow_active');
    }
  }
}

export default CheckboxList;