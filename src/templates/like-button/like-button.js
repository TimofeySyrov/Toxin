class LikeButton {
  constructor(domParent) {
    this.button = domParent.querySelector('.js-like-button');

    this._findDomElements();
    this._bindEventListener();
    this._setStage();
  }

  _findDomElements() {
    this.icon = this.button.querySelector('.js-like-button__icon');
    this.isChecked = this.button.getAttribute('data-checked');
    this.countLikes = this.button.querySelector('.js-like-button__count');
  }

  _bindEventListener() {
    this.button.addEventListener('click', this._handleButtonClick.bind(this));
  }

  _handleButtonClick() {
    this.button.classList.toggle('like-button_active');

    if (this.button.className.includes('like-button_active')) {
      this._setActive();
      this.countLikes.textContent = Number(this.countLikes.textContent) + 1;
    } else {
      this._setUnActive();

      if (this.countLikes.textContent >= 0) {
        this.countLikes.textContent = Number(this.countLikes.textContent) - 1;
      }
    }
  }

  _setStage() {
    if (this.isChecked === 'true') {
      this._setActive();
    }
    
    if (this.isChecked === 'false') {
      this._setUnActive();
    }
  }

  _setActive() {
    this.button.classList.add('like-button_active');
    this.icon.classList.add('like-button__icon_active');
    this.icon.innerHTML = 'favorite';
  }

  _setUnActive() {
    this.button.classList.remove('like-button_active');
    this.icon.classList.remove('like-button__icon_active');
    this.icon.innerHTML = 'favorite_border';
  }
}

export default LikeButton;
