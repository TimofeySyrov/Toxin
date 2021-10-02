class Dropdown {
  constructor(container) {
    this.container = container;

    this.findDomElement();
    this.init();
  }

  findDomElement() {
    this.dropType = this.container.getAttribute('dropType');
    this.dropIsOpen = this.container.getAttribute('isopen');
    this.dropName = this.container.querySelector('.js-dropdown-name');
    this.dropTittle = this.container.querySelector('.js-dropdown-name-text');
    this.dropIcon = this.container.querySelector('.js-dropdown-icon');
    this.dropList = this.container.querySelector('.js-dropdown-list');
    this.dropCounts = this.container.querySelectorAll('.js-dropdown-number');
    this.dropItems = this.dropList.querySelectorAll('.js-dropdown-item');

    if (this.dropType === 'guests') {
      this.dropConfirm = this.dropList.querySelector('.js-dropdown-confirm');
      this.dropClear = this.dropList.querySelector('.js-dropdown-clear');
    }
  }

  init() {
    this.checkDropIsOpen();
    this.checkMinusPlusButtons();
    this.eventListenerDropList();
    this.eventListenerList();
    this.checkCounts();

    if (this.dropType === 'guests') {
      this.eventListenerConfirmButton();
      this.eventListenerClearButton();
    }
  }

  checkDropIsOpen() {
    if (this.dropIsOpen === 'true') {
      this.openDropList();
    }
  }

  openDropList() {
    if (!(this.dropList.classList.contains('dropdown__list-active'))) {
      this.dropList.classList.add('dropdown__list-active');
      this.dropName.classList.add('dropdown__name-active');
      this.dropIcon.classList.add('dropdown__icon-active');
    } else {
      this.dropList.classList.remove('dropdown__list-active');
      this.dropName.classList.remove('dropdown__name-active');
      this.dropIcon.classList.remove('dropdown__icon-active');
    }
  }

  eventListenerDropList() {
    this.dropName.addEventListener('click', this.openDropList.bind(this));
  }

  checkCounts() {
    const num = [];

    for (const item of this.dropCounts) {
      num.push(Number(item.innerHTML));
    }
    this.displayCount(num);
  }

  displayCount(x) {
    if (this.dropType === 'room-about') {
      const [room, bedroom, bathroom] = x;
      let roomDesc,
        bedDesc,
        bathDesc = '';

      if (room > 0) {
        if (room === 1) {
          roomDesc = `${room} спальня`;
        } else if (room > 1 && room < 5) {
          roomDesc = `${room} спальни`;
        } else if (room > 4) {
          roomDesc = `${room} спален`;
        }
        this.dropTittle.innerHTML = `${roomDesc}...`;
      } else {
        roomDesc = '';
      }

      if (bedroom > 0) {
        if (bedroom === 1) {
          bedDesc = `${bedroom} кровать`;
        } else if (bedroom > 1 && bedroom < 5) {
          bedDesc = `${bedroom} кровати`;
        } else if (bedroom > 4) {
          bedDesc = `${bedroom} кроватей`;
        }
        this.dropTittle.innerHTML = `${bedDesc}...`;
      } else {
        bedDesc = '';
      }

      if (bathroom > 0) {
        if (bathroom === 1) {
          bathDesc = `${bathroom} ванная комн`;
        } else if (bathroom > 1 && bathroom < 5) {
          bathDesc = `${bathroom} ванные комн`;
        } else if (bathroom > 4) {
          bathDesc = `${bathroom} ванных комн`;
        }
        this.dropTittle.innerHTML = `${bathDesc}...`;
      } else {
        bathDesc = '';
      }

      if (room > 0 && bedroom > 0) {
        this.dropTittle.innerHTML = `${roomDesc}, ${bedDesc}...`;
      } else if (room > 0 && bathroom > 0) {
        this.dropTittle.innerHTML = `${roomDesc}, ${bathDesc}...`;
      } else if (bedroom > 0 && bathroom > 0) {
        this.dropTittle.innerHTML = `${bedDesc}, ${bathDesc}...`;
      }

      if (room > 0 && bedroom > 0 && bathroom > 0) {
        this.dropTittle.innerHTML = `${roomDesc}, ${bedDesc}, ${bathDesc}...`;
      }

      if (room === 0 && bedroom === 0 && bathroom === 0) {
        this.dropTittle.innerHTML = 'спальни, кровати, ванные комн...';
      }

      localStorage.setItem('NumRoomAbout', JSON.stringify([room, bedroom, bathroom]));
    }

    if (this.dropType === 'guests') {
      let adults = '';
      let babies = '';
      const adultsCount = x[0] + x[1];
      const babiesCount = x[2];

      if (adultsCount > 0) {
        if (adultsCount === 1) {
          adults = `${adultsCount} гость`;
        } else if (adultsCount > 1 && adultsCount < 5) {
          adults = `${adultsCount} гостя`;
        } else if (adultsCount > 4) {
          adults = `${adultsCount} гостей`;
        }

        this.dropTittle.innerHTML = adults;
        this.displayClearButton();
      } else {
        this.dropTittle.innerHTML = 'Сколько гостей';
        this.deleteClearButton();
      }

      if (babiesCount > 0) {
        if (babiesCount === 1) {
          babies = `${babiesCount} младенец`;
        } else if (babiesCount > 1 && babiesCount < 5) {
          babies = `${babiesCount} младенца`;
        } else if (babiesCount > 4) {
          babies = `${babiesCount} младенцев`;
        } else {
          babies = '';
        }
      }
      if (adultsCount > 0 && babiesCount > 0) {
        this.dropTittle.innerHTML = `${adults}, ${babies}`;
      }

      localStorage.setItem('NumGuests', JSON.stringify([adultsCount, babiesCount]));
    }
  }

  eventListenerList() {
    this.dropList.addEventListener('click', this.handlerList.bind(this));
  }

  handlerList(event) {
    const target = event.target;

    if (target.classList.contains('js-dropdown-plus')) {
      this.plusButton(target);
    } else if (target.classList.contains('js-dropdown-minus')) {
      this.minusButton(target);
    }
  }

  plusButton(elem) {
    const number = elem.previousElementSibling;
    number.innerHTML = Number(number.innerHTML) + 1;
    this.checkMinusPlusButtons();
    if (this.dropType === 'room-about') {
      this.checkCounts();
    }
  }

  minusButton(elem) {
    if (Number(elem.nextElementSibling.innerHTML) > 0) {
      elem.nextElementSibling.innerHTML = `${Number(elem.nextElementSibling.innerHTML) - 1}`;
    }
    this.checkMinusPlusButtons();
    if (this.dropType === 'room-about') {
      this.checkCounts();
    }
  }

  checkMinusPlusButtons() {
    for (const btn of this.dropItems) {
      btn.number = btn.querySelector('.js-dropdown-number');
      btn.plus = btn.querySelector('.js-dropdown-plus');
      btn.minus = btn.querySelector('.js-dropdown-minus');

      if (!(btn.plus.classList.contains('dropdown__list-item-count-btn-active'))) {
        btn.plus.classList.add('dropdown__list-item-count-btn-active');
      }

      if (Number(btn.number.innerHTML) <= 0) {
        btn.number.innerHTML = 0;
        if (btn.minus.classList.contains('dropdown__list-item-count-btn-active')) {
          btn.minus.classList.remove('dropdown__list-item-count-btn-active');
        }
      }

      if (Number(btn.number.innerHTML) > 0) {
        if (!(btn.minus.classList.contains('dropdown__list-item-count-btn-active'))) {
          btn.minus.classList.add('dropdown__list-item-count-btn-active');
        }
      }
    }
  }

  eventListenerConfirmButton() {
    this.dropConfirm.addEventListener('click', this.confirmButton.bind(this));
  }

  confirmButton() {
    this.checkCounts();
  }

  eventListenerClearButton() {
    this.dropClear.addEventListener('click', this.clearButton.bind(this));
  }

  clearButton() {
    for (const count of this.dropCounts) {
      count.innerHTML = 0;
    }
    this.checkCounts();
    this.checkMinusPlusButtons();
  }

  deleteClearButton() {
    if (this.dropClear.classList.contains('dropdown__btns-clear-active')) {
      this.dropClear.classList.remove('dropdown__btns-clear-active');
    }
  }

  displayClearButton() {
    if (!(this.dropClear.classList.contains('dropdown__btns-clear-active'))) {
      this.dropClear.classList.add('dropdown__btns-clear-active');
    }
  }
}

export default Dropdown;
