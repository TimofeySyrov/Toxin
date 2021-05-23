class LikeButton {
  constructor(element) {
      this.button = element;

      this.findDomElement();
      this.bindEventListener();
      this.setStage();
  }
  
  findDomElement() {
      this.heartContainer = this.button.querySelector('.js-like-button__icon');
      this.stageData = this.button.getAttribute('data');
      this.countLikes = this.button.querySelector('.js-like-button__count');
      this.heart = this.button.querySelector('.material-icons');
  }
  bindEventListener() {
      this.button.addEventListener('click', this.handleButtonClick.bind(this));
  }
  handleButtonClick() {
      this.button.classList.toggle('like-button_active');
  
      if(this.button.className.includes('like-button_active')) {
          this.setActive();
          this.countLikes.textContent = Number(this.countLikes.textContent) + 1;
      }
      else {
          this.setUnActive();
          if(this.countLikes.textContent >= 0) {
          this.countLikes.textContent = Number(this.countLikes.textContent) - 1;
          }
      }
  }
  setStage() {
      if(this.stageData === 'true') {
          this.setActive();
      }
      else if(this.stageData === 'false') {
          this.setUnActive();
      }
  }
  setActive() {
      this.button.classList.add('like-button_active');
      this.heartContainer.classList.add('like-button__icon_active');
      this.heart.textContent='favorite';
  }
  setUnActive() {
      this.button.classList.remove('like-button_active');
      this.heartContainer.classList.remove('like-button__icon_active');
      this.heart.textContent='favorite_border';
  }
}

export default LikeButton;