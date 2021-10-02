import LikeButton from './like-button';

document.addEventListener('DOMContentLoaded', () => {
  const likeButtonDOMs = document.querySelectorAll('.js-like-button');

  likeButtonDOMs.forEach((item) => new LikeButton(item));
});
