import LikeButton from './like-button';

document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.js-like-button');

  likeButtons.forEach((item) => new LikeButton(item));
});