import RangeSlider from './range-slider';

document.addEventListener('DOMContentLoaded', () => {
  const sliderDOM = document.querySelectorAll('.js-range-slider');

  sliderDOM.forEach((elem) => new RangeSlider(elem));
});
