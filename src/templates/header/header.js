import HeaderNavMenu from './header-nav-menu/header-nav-menu';

class Header {
  constructor(domParent) {
    this.body = domParent.querySelector('.js-header');
    this.headerNavMenuBody = this.body.querySelector('.js-header__nav-menu');

    this._init();
  }

  _init() {
    this.headerNavMenu = new HeaderNavMenu(this.headerNavMenuBody);
  }
}

export default Header;
