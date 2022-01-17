class Dropdown {
  constructor(domParent, keyPhrase) {
    this.container = domParent.querySelector('.js-dropdown');
    this.keyPhrase = keyPhrase;

    this._findDomElements();
    this._init();
  }

  _findDomElements() {
    this.isOpen = this.container.hasAttribute('data-is-open');
    this.nameBox = this.container.querySelector('.js-dropdown__name');
    this.placeholderBox = this.container.querySelector('[data-placeholder-type="dropdown-name"]');
    this.placeholder = this.placeholderBox.getAttribute('data-placeholder-name');
    this.iconBox = this.container.querySelector('.js-dropdown__icon');
    this.listBox = this.container.querySelector('.js-dropdown__list');
    this.totalBoxes = this.container.querySelectorAll('[data-placeholder-type="item-total"]');
    this.itemBoxes = this.container.querySelectorAll('.js-dropdown__item');
    this.itemsMinusBtn = this.container.querySelectorAll('[data-button-type="minus"]');
    this.itemPlusBtn = this.container.querySelectorAll('[data-button-type="plus"]');
    this.controlPanel = this.container.querySelector('.js-dropdown__control-panel');
    this.withControlPanel = this.controlPanel !== undefined && this.controlPanel !== null;

    if (this.withControlPanel) {
      this.confirmBtn = this.container.querySelector('[data-button-type="confirm"]');
      this.clearBtn = this.container.querySelector('[data-button-type="clear"]');
    }
  }

  _init() {
    this._bindEventListeners();
    this._showDropdownTotal();

    if (this.isOpen) {
      this._showList();
    }

    if (this.withControlPanel) {
      if (this._getTotalCount() > 0) {
        this._showClearBtn();
      }
      this._showConfirmBtn();
    }

    this.itemBoxes.forEach((item) => {
      const counter = item.lastChild;
      this._checkItemBtnsStatus(counter);
    });
  }

  _bindEventListeners() {
    document.addEventListener('click', this._handleDocumentClick.bind(this), false);
    this.nameBox.addEventListener('click', this._handleNameBoxClick.bind(this));
    this._bindEventListenerItemButtons();

    if (this.withControlPanel) {
      this._bindEventListenerDropdownButtons();
    }
  }

  _bindEventListenerItemButtons() {
    this.itemsMinusBtn.forEach((btn) => {
      btn.addEventListener('click', this._handleMinusBtnClick.bind(this));
    });
    this.itemPlusBtn.forEach((btn) => {
      btn.addEventListener('click', this._handlePlusBtnClick.bind(this));
    });
  }

  _bindEventListenerDropdownButtons() {
    this.confirmBtn.addEventListener('click', this._handleConfirmBtnClick.bind(this));
    this.clearBtn.addEventListener('click', this._handleClearBtnClick.bind(this));
  }

  _handleNameBoxClick() {
    const isActive = this.listBox.classList.contains('dropdown__list_active');

    if (isActive) {
      this._hideList();
    } else {
      this._showList();
    }
  }

  _handleDocumentClick(event) {
    const { target } = event;
    const clickOnDropdown = this.container.contains(target);

    if (!clickOnDropdown) {
      this._hideList();
    }
  }

  _showList() {
    this.container.setAttribute('data-is-open', true);
    this.listBox.classList.add('dropdown__list_active');
    this.nameBox.classList.add('dropdown__name_active');
    this.iconBox.classList.add('dropdown__icon_active');
  }

  _hideList() {
    this.container.removeAttribute('data-is-open');
    this.listBox.classList.remove('dropdown__list_active');
    this.nameBox.classList.remove('dropdown__name_active');
    this.iconBox.classList.remove('dropdown__icon_active');
  }

  _handleMinusBtnClick(event) {
    const $btn = event.currentTarget;
    const $btnItem = $btn.parentNode;
    const $total = $btn.nextSibling;
    const isTotalEqualZero = parseInt($total.innerHTML) === 0;

    if (!isTotalEqualZero) {
      $total.innerHTML = parseInt($total.innerHTML) - 1;
    }

    this._checkItemBtnsStatus($btnItem);
    this._showDropdownTotal();
  }

  _handlePlusBtnClick(event) {
    const $btn = event.currentTarget;
    const $btnItem = $btn.parentNode;
    const $total = $btn.previousSibling;

    $total.innerHTML = parseInt($total.innerHTML) + 1;
    this._checkItemBtnsStatus($btnItem);
    this._showDropdownTotal();
  }

  _checkItemBtnsStatus(item) {
    const $minus = item.firstChild;
    const $total = $minus.nextSibling;
    const isTotalEqualZero = parseInt($total.innerHTML) === 0;

    if (!isTotalEqualZero) {
      $minus.classList.add('dropdown__button_active');
      
      if (this.withControlPanel) {
        this._showClearBtn();
      }
    } else {
      $minus.classList.remove('dropdown__button_active');
    }
  }

  _showConfirmBtn() {
    this.confirmBtn.classList.add('dropdown__control-button_active');
  }

  _showClearBtn() {
    this.clearBtn.classList.add('dropdown__control-button_active');
  }

  _hideClearBtn() {
    this.clearBtn.classList.remove('dropdown__control-button_active');
  }

  _handleConfirmBtnClick() {
    this.totalBoxes.forEach((total) => {
      const totalIsZero = parseInt(total.innerHTML) === 0;

      if (!totalIsZero) {
        this._showClearBtn();
      }
    });

    this._showDropdownTotal();
    this._hideList();
  }

  _handleClearBtnClick() {
    this.totalBoxes.forEach((total) => {
      const $totalItem = total.parentNode;
      total.innerHTML = 0;
      this._checkItemBtnsStatus($totalItem);
    });
    
    this._showDropdownTotal();
    this._hideClearBtn();
  }

  _getWordEnding(num, dec) {
    let currentCount = num;

    if (currentCount > 100) currentCount %= 100;
    if (currentCount <= 20 && currentCount >= 10) return dec[2];
    if (currentCount > 20) currentCount %= 10;
    if (currentCount !== 1) {
      if (currentCount > 1 && currentCount < 5) return dec[1];
      return dec[2];
    }
    return dec[0];
  }

  _getTotalCount() {
    const total = Array.from(this.totalBoxes).map((item) => Number(item.innerHTML));
    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    return total.reduce(reducer);
  }

  _getItemsList() {
    const list = Array.from(this.itemBoxes)
      .filter((item) => {
        const total = item.querySelector('[data-placeholder-type="item-total"]').innerHTML;
        const isTotalEqualZero = Number(total) === 0;

        if (!isTotalEqualZero) return true;
        return false;
      })
      .map((item) => {
        const name = item.getAttribute('data-item-name');
        const total = item.querySelector('[data-placeholder-type="item-total"]').innerHTML;
        return `${total} ${name}`;
      });

    return list;
  }
  
  _showDropdownTotal() {
    const { keyPhrase, placeholder, placeholderBox } = this;
    const hasKeyPhrase = keyPhrase !== undefined && keyPhrase !== null && keyPhrase !== '';
    const total = this._getTotalCount();
    const isTotalEqualZero = total === 0;

    if (isTotalEqualZero) {
      placeholderBox.innerHTML = `${placeholder}`;
    }
    
    if (!isTotalEqualZero) {
      if (hasKeyPhrase) {
        placeholderBox.innerHTML = `${total} ${this._getWordEnding(total, keyPhrase)}`;
      } else {
        const list = this._getItemsList();

        if (list.length > 2) {
          placeholderBox.innerHTML = `${list.slice(0, 2).join(', ')}...`;
        } else {
          placeholderBox.innerHTML = `${list.join(', ')}`;
        }
      }
    }
  }
}

export default Dropdown;
