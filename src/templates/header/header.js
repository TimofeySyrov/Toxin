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
    this.menuButton.addEventListener('click', this._handleMenuButtonClick.bind(this));
  }

  _handleMenuButtonClick() {
    this.menuContainer.classList.toggle('header__nav-container_active');
  }
}

export default Header;
