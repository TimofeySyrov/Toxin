import RangeSlider from './range-slider';

document.addEventListener('DOMContentLoaded', () => {
    const range_sliders = document.querySelectorAll('.js-range-slider');

    range_sliders.forEach((elem) => new RangeSlider(elem));
});