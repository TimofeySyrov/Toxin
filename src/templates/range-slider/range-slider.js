import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.min.css';

class RangeSlider{
  constructor(elem){
    this.element = elem;

    this.min_price = elem.querySelector('.js-range-slider__min-price');
    this.max_price = elem.querySelector('.js-range-slider__max-price');
    this.rangeBody = elem.querySelector('.js-range-slider__slider');

    this.init();
    this.eventListener_changePrices();
    
  }

  init(){
    if(this.rangeBody){
      noUiSlider.create(this.rangeBody, {
        start: [Number(parseInt(this.min_price.innerHTML.match(/\d+/))), Number(parseInt(this.max_price.innerHTML.match(/\d+/)))],
        connect: true,
        step: 1,
        range: {
          'min': 0,
          'max': 15000
        }
      });
    }
  }

  eventListener_changePrices(){
    const prices = [this.min_price, this.max_price];
    this.rangeBody.noUiSlider.on('update', function(values, handle){
      prices[handle].innerHTML = Math.round(values[handle]).toLocaleString('ru-RU')+prices[handle].innerHTML.slice(-1);
    });
  }
  
}

export default RangeSlider;