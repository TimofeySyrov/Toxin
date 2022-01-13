class HeaderNavMenu {
  constructor(domParent) {
    this.body = domParent.querySelector('.js-header-nav-menu');
    this.navItems = this.body.querySelectorAll('.js-header-nav-menu__item');

    this._init();
  }

  _init() {
    this._initNavItems();
    this._bindEventListeners();
  }

  _bindEventListeners() {
    document.addEventListener('click', this._handleDocumentClick.bind(this));
  }

  _handleDocumentClick(event) {
    const { target } = event;
    const [currentItem] = this.itemsWithSubmenu.filter((item) => (
      item.contains(target)
    ));
    const clickOnItem = currentItem !== undefined && currentItem !== null;

    if (!clickOnItem) {
      this.itemsWithSubmenu.forEach((item) => {
        const isActive = item.classList.contains('header-nav-menu__item_active');

        if (isActive) {
          item.classList.remove('header-nav-menu__item_active');
        }
      });
    }
  }

  _initNavItems() {
    this._findNavItemsWithSubmenu();

    this.itemsWithSubmenu.forEach((item) => this._addEventListenerForItem(item));
  }

  _findNavItemsWithSubmenu() {
    this.itemsWithSubmenu = [];

    this.navItems.forEach((item) => {
      const withSubmenu = item.hasAttribute('data-with-submenu');

      if (withSubmenu) {
        this.itemsWithSubmenu.push(item);
      }
    });
  }

  _addEventListenerForItem(item) {
    item.addEventListener('click', this._handleNavItemClick.bind(this));
  }

  _handleNavItemClick(event) {
    const { currentTarget } = event;

    currentTarget.classList.toggle('header-nav-menu__item_active');
  }
}

export default HeaderNavMenu;
