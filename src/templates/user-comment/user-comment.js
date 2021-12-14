import LikeButton from '../like-button/like-button';

class UserComment {
  constructor(domParent) {
    this.body = domParent.querySelector('.js-user-comment');

    this._init();
  }

  _init() {
    const { body } = this;
    this.likeButton = new LikeButton(body);
  }
}

export default UserComment;
