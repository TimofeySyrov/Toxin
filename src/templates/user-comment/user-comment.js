import LikeButton from '../like-button/like-button';

class UserComment {
  constructor(domParent) {
    this.body = domParent.querySelector('.js-user-comment');

    this._init();
  }

  _init() {
    const { body } = this;
    const likeButtonBody = body.querySelector('.js-user-comment__like-btn');
    this.likeButton = new LikeButton(likeButtonBody);
  }
}

export default UserComment;
