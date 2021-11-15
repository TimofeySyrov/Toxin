import noUiSlider from 'nouislider';

class RangeSlider {
  constructor(elem) {
    this.element = elem;

    this.minPrice = elem.querySelector('.js-range-slider__min-price');
    this.maxPrice = elem.querySelector('.js-range-slider__max-price');
    this.rangeBody = elem.querySelector('.js-range-slider__slider');

    this._init();
    this._bindEventListener();
  }

  _init() {
    if (this.rangeBody) {
      noUiSlider.create(this.rangeBody, {
        start: [Number(parseInt(this.minPrice.innerHTML.match(/\d+/))), Number(parseInt(this.maxPrice.innerHTML.match(/\d+/)))],
        connect: true,
        step: 1,
        range: {
          min: 0,
          max: 15000,
        },
      });
    }
  }

  _bindEventListener() {
    this.rangeBody.noUiSlider.on('update', this._setValues.bind(this));
  }

  _setValues(values, handle) {
    const prices = [this.minPrice, this.maxPrice];
    prices[handle].innerHTML = Math.round(values[handle]).toLocaleString('ru-RU') + prices[handle].innerHTML.slice(-1);
  }
}

export default RangeSlider;
