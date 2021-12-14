class LikeButton {
  constructor(domParent) {
    this.container = domParent.querySelector('.js-like-button');
    this.button = this.container.querySelector('.js-like-button__btn');

    this._findDomElements();
    this._bindEventListener();
    this._setStage();
  }

  _findDomElements() {
    this.heartContainer = this.button.querySelector('.js-like-button__icon');
    this.stageData = this.button.getAttribute('data-checked');
    this.countLikes = this.button.querySelector('.js-like-button__count');
    this.heart = this.button.querySelector('.material-icons');
  }

  _bindEventListener() {
    this.button.addEventListener('click', this._handleButtonClick.bind(this));
  }

  _handleButtonClick() {
    this.button.classList.toggle('like-button__btn_active');

    if (this.button.className.includes('like-button__btn_active')) {
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
    if (this.stageData === 'true') {
      this._setActive();
    } else if (this.stageData === 'false') {
      this._setUnActive();
    }
  }

  _setActive() {
    this.button.classList.add('like-button__btn_active');
    this.heartContainer.classList.add('like-button__icon_active');
    this.heart.textContent = 'favorite';
  }

  _setUnActive() {
    this.button.classList.remove('like-button__btn_active');
    this.heartContainer.classList.remove('like-button__icon_active');
    this.heart.textContent = 'favorite_border';
  }
}

export default LikeButton;
