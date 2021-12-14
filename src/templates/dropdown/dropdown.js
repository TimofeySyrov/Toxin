class Dropdown {
  constructor(domParent) {
    this.container = domParent.querySelector('.js-dropdown');

    this._findDomElements();
    this._init();
  }

  _findDomElements() {
    this.type = this.container.getAttribute('data-type');
    this.isOpen = this.container.getAttribute('data-is-open');
    this.nameBox = this.container.querySelector('.js-dropdown__name');
    this.placeholderBox = this.container.querySelector('.js-dropdown__placeholder');
    this.iconBox = this.container.querySelector('.js-dropdown__icon');
    this.listBox = this.container.querySelector('.js-dropdown__list');
    this.totalBoxes = this.container.querySelectorAll('.js-dropdown__item-total');
    this.itemBoxes = this.container.querySelectorAll('.js-dropdown__item');
    this.itemsMinusBtn = this.container.querySelectorAll('.js-dropdown__minus-btn');
    this.itemPlusBtn = this.container.querySelectorAll('.js-dropdown__plus-btn');
    const isGuestsType = this.type === 'guests';

    if (isGuestsType) {
      this.confirmBtn = this.container.querySelector('.js-dropdown__confirm-btn');
      this.clearBtn = this.container.querySelector('.js-dropdown__clear-btn ');
    }
  }

  _init() {
    const isOpen = this.isOpen === 'true';
    const isGuestsType = this.type === 'guests';
    const isRoomAboutType = this.type === 'room-about';

    this._bindEventListeners();

    if (isGuestsType) {
      this._showTotalGuests();
    }

    if (isRoomAboutType) {
      this._showTotalAboutRoom();
    }

    if (isOpen) {
      this._showList();
    }

    this.itemBoxes.forEach((item) => {
      const counter = item.lastChild;
      this._checkItemBtnsStatus(counter)
    });
  }

  _bindEventListeners() {
    const isGuestsType = this.type === 'guests';

    this.nameBox.addEventListener('click', this._handleNameBoxClick.bind(this));
    this._bindEventListenerItemButtons();

    if (isGuestsType) {
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

    if (!isActive) {
      this._showList();
    } else {
      this._hideList();
    }
  }

  _showList() {
    this.listBox.classList.add('dropdown__list_active');
    this.nameBox.classList.add('dropdown__name_active');
    this.iconBox.classList.add('dropdown__icon_active');
  }

  _hideList() {
    this.listBox.classList.remove('dropdown__list_active');
    this.nameBox.classList.remove('dropdown__name_active');
    this.iconBox.classList.remove('dropdown__icon_active');
  }

  _handleMinusBtnClick(event) {
    const $btn = event.currentTarget;
    const $btnItem = $btn.parentNode;
    const $total = $btn.nextSibling;
    const totalIsZero = parseInt($total.innerHTML) === 0;
    const isRoomAboutType = this.type === 'room-about';

    if (!totalIsZero) {
      $total.innerHTML = parseInt($total.innerHTML) - 1;
    }

    this._checkItemBtnsStatus($btnItem);

    if (isRoomAboutType) {
      this._showTotalAboutRoom($btnItem);
    }
  }

  _handlePlusBtnClick(event) {
    const $btn = event.currentTarget;
    const $btnItem = $btn.parentNode;
    const $total = $btn.previousSibling;
    const isRoomAboutType = this.type === 'room-about';
    $total.innerHTML = parseInt($total.innerHTML) + 1;

    this._checkItemBtnsStatus($btnItem);
    
    if (isRoomAboutType) {
      this._showTotalAboutRoom($btnItem);
    }
  }

  _checkItemBtnsStatus(item) {
    const $minus = item.firstChild;
    const $total = $minus.nextSibling;
    const totalIsZero = parseInt($total.innerHTML) === 0;
    const isActiveMinus = $minus.classList.contains('dropdown__item-btn_active');

    if (!totalIsZero && !isActiveMinus) {
      $minus.classList.add('dropdown__item-btn_active');
    }

    if (totalIsZero && isActiveMinus) {
      $minus.classList.remove('dropdown__item-btn_active');
    }
  }

  _showClearBtn() {
    this.clearBtn.classList.add('dropdown__clear-btn_active');
  }

  _hideClearBtn() {
    this.clearBtn.classList.remove('dropdown__clear-btn_active');
  }

  _handleConfirmBtnClick() {
    this.totalBoxes.forEach((total) => {
      const totalIsZero = parseInt(total.innerHTML) === 0;

      if (!totalIsZero) {
        this._showClearBtn();
      }
    });

    this._showTotalGuests();
    this._hideList();
  }

  _handleClearBtnClick() {
    const isGuestsType = this.type === 'guests';
    const isRoomAboutType = this.type === 'room-about';

    this.totalBoxes.forEach((total) => {
      const $totalItem = total.parentNode;
      total.innerHTML = 0;
      this._checkItemBtnsStatus($totalItem);
    });

    if (isGuestsType) {
      this._showTotalGuests();
    }

    if (isRoomAboutType) {
      this._showTotalAboutRoom();
    }
    
    this._hideClearBtn();
  }

  _showTotalGuests() {
    const placeholder = 'Сколько гостей';
    const getAdultsPlaceholder = (number) => {
      const isOne = number === 1;
      const isTwo = number > 1 && number <= 4;
      const isFive = number > 4;

      if (isOne) return 'гость';
      if (isTwo) return 'гостя';
      if (isFive) return 'гостей';
    };
    const getBabiesPlaceholder = (number) => {
      const isOne = number === 1;
      const isTwo = number > 1 && number <= 4;
      const isFive = number > 4;

      if (isOne) return 'младенец';
      if (isTwo) return 'младенца';
      if (isFive) return 'младенцев';
    };
    let adults = 0;
    let babies = 0;

    this.itemBoxes.forEach((item) => {
      const itemType = item.getAttribute('data-item-type');
      const $itemTotal = item.querySelector('.js-dropdown__item-total');

      switch (itemType) {
        case 'взрослые':
          adults += parseInt($itemTotal.innerHTML);
          break;
        case 'дети':
          adults += parseInt($itemTotal.innerHTML);
          break;
        case 'младенцы':
          babies = parseInt($itemTotal.innerHTML);
          break;
        default:
          break;
      }
    });

    const totalAmountIsZero = adults === 0;

    if  (totalAmountIsZero) {
      this.placeholderBox.innerHTML = placeholder;
    }

    if (!totalAmountIsZero) {
      const isAdults = adults !== 0;
      const isBabies = babies !== 0;
      const adultsPlaceholder = `${adults} ${getAdultsPlaceholder(adults)}`;

      if (isAdults && isBabies) {
        const babiesPlaceholder = `${babies} ${getBabiesPlaceholder(babies)}`;

        this.placeholderBox.innerHTML = `${adultsPlaceholder}, ${babiesPlaceholder}`;
      }
      
      if (isAdults && !isBabies) {
        this.placeholderBox.innerHTML = `${adultsPlaceholder}`;
      }
    }
    
  }

  _showTotalAboutRoom() {
    const placeholder = 'Выберите удобства';
    const getBedroomsPlaceholder = (number) => {
      const isOne = number === 1;
      const isTwo = number > 1 && number <= 4;
      const isFive = number > 4;

      if (isOne) return 'спальня';
      if (isTwo) return 'спальни';
      if (isFive) return 'спальней';
    };
    const getBedsPlaceholder = (number) => {
      const isOne = number === 1;
      const isTwo = number > 1 && number <= 4;
      const isFive = number > 4;

      if (isOne) return 'кровать';
      if (isTwo) return 'кровати';
      if (isFive) return 'кроватей';
    };
    const getBathroomsPlaceholder = (number) => {
      const isOne = number === 1;
      const isTwo = number > 1 && number <= 4;
      const isFive = number > 4;

      if (isOne) return 'ванная комната';
      if (isTwo) return 'ванные комнаты';
      if (isFive) return 'ванных комнат';
    };
    let bedrooms = 0;
    let beds = 0;
    let bathrooms = 0;

    this.itemBoxes.forEach((item) => {
      const itemType = item.getAttribute('data-item-type');
      const $itemTotal = item.querySelector('.js-dropdown__item-total');

      switch (itemType) {
        case 'спальни':
          bedrooms = parseInt($itemTotal.innerHTML);
          break;
        case 'кровати':
          beds = parseInt($itemTotal.innerHTML);
          break;
        case 'ванные комнаты':
          bathrooms = parseInt($itemTotal.innerHTML);
          break;
        default:
          break;
      }
    });

    const totalAmount = bedrooms + beds + bathrooms;
    const totalAmountIsZero = totalAmount === 0;

    if (totalAmountIsZero) {
      this.placeholderBox.innerHTML = placeholder;
    }

    if (!totalAmountIsZero) {
      const isBedrooms = bedrooms !== 0;
      const isBeds = beds !== 0;
      const isBathrooms = bathrooms !== 0;
      const bedroomsPlaceholder = `${bedrooms} ${getBedroomsPlaceholder(bedrooms)}`;
      const bedsPlaceholder = `${beds} ${getBedsPlaceholder(beds)}`;
      const bathroomsPlaceholder = `${bathrooms} ${getBathroomsPlaceholder(bathrooms)}`;

      if (isBedrooms) {
        if (isBeds) {
          this.placeholderBox.innerHTML = `${bedroomsPlaceholder}, ${bedsPlaceholder}...`;
        }

        if (!isBeds && isBathrooms) {
          this.placeholderBox.innerHTML = `${bedroomsPlaceholder}...`;
        }

        if (!isBeds && !isBathrooms) {
          this.placeholderBox.innerHTML = `${bedroomsPlaceholder}`;
        }
      }

      if (!isBedrooms) {
        if (isBeds && isBathrooms) {
          this.placeholderBox.innerHTML = `${bedsPlaceholder}...`;
        }

        if (isBeds && !isBathrooms) {
          this.placeholderBox.innerHTML = `${bedsPlaceholder}`;
        }

        if (!isBeds && isBathrooms) {
          this.placeholderBox.innerHTML = `${bathroomsPlaceholder}`;
        }
      }
    }
  }
}

export default Dropdown;
