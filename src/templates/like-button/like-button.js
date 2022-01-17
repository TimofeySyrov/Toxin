class LikeButton {
  constructor(domParent) {
    this.button = domParent.querySelector('.js-like-button');

    this._findDomElements();
    this._bindEventListener();
  }

  _findDomElements() {
    this.icon = this.button.querySelector('.js-like-button__icon');
    this.countLikes = this.button.querySelector('.js-like-button__count');
    this.isChecked = this.button.hasAttribute('data-checked');
  }

  _bindEventListener() {
    this.button.addEventListener('click', this._handleButtonClick.bind(this));
  }

  _handleButtonClick() {
    const { isChecked, countLikes } = this;

    if (!isChecked) {
      this._setActive();
      countLikes.textContent = Number(countLikes.textContent) + 1;
    } else {
      const isCorrectCount = Number(countLikes.textContent) >= 0;
      this._removeActive();

      if (isCorrectCount) {
        countLikes.textContent = Number(countLikes.textContent) - 1;
      }
    }
  }

  _setActive() {
    this.isChecked = true;
    this.button.classList.add('like-button_active');
    this.icon.classList.add('like-button__icon_active');
    this.icon.innerHTML = 'favorite';
  }

  _removeActive() {
    this.isChecked = false;
    this.button.classList.remove('like-button_active');
    this.icon.classList.remove('like-button__icon_active');
    this.icon.innerHTML = 'favorite_border';
  }
}

export default LikeButton;
