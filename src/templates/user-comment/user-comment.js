import LikeButton from '../like-button/like-button';

class UserComment {
  constructor(domParent) {
    this.body = domParent.querySelector('.js-user-comment');

    this._init();
  }

  _init() {
    const { body } = this;
    const likeButtonBody = body.querySelector('[data-comment-like-body]');
    this.likeButton = new LikeButton(likeButtonBody);
  }
}

export default UserComment;
