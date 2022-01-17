import HeaderNavMenu from './header-nav-menu/header-nav-menu';

class Header {
  constructor(domParent) {
    this.body = domParent.querySelector('.js-header');

    this._findDOMElements();
    this._init();
    this._bindEventListeners();
  }

  _findDOMElements() {
    this.headerNavMenuBody = this.body.querySelector('.js-header__nav-menu');
    this.menuButton = this.body.querySelector('.js-header__menu-button');
    this.menuContainer = this.body.querySelector('.js-header__nav-container');
  }

  _init() {
    this.headerNavMenu = new HeaderNavMenu(this.headerNavMenuBody);
  }

  _bindEventListeners() {
    document.addEventListener('click', this._handleDocumentClick.bind(this));
    this.menuButton.addEventListener('click', this._handleMenuButtonClick.bind(this));
  }

  _handleDocumentClick(event) {
    const { target } = event;
    const clickOnMenuButton = target === this.menuButton;
    const clickOnMenu = this.menuContainer.contains(target);
    const isClickOutsideComponent = !clickOnMenu && !clickOnMenuButton;

    if (isClickOutsideComponent) {
      this.menuContainer.classList.remove('header__nav-container_active');
    }
  }

  _handleMenuButtonClick() {
    this.menuContainer.classList.toggle('header__nav-container_active');
  }
}

export default Header;
