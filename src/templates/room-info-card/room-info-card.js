import DateDropdown from '../date-dropdown/date-dropdown';
import Dropdown from '../dropdown/dropdown';

class RoomInfoCard {
  constructor(domParent) {
    this.body = domParent.querySelector('.js-room-info-card');
    
    this._init();
  }

  _init() {
    this._findDOMElements();
    this._initComponents();
    this._subscribeToDateChanges();
  }

  _findDOMElements() {
    const { body } = this;
    this.pricePerDay = body.querySelector('.js-room-info-card__price-per-day');
    this.daysPeriod = body.querySelector('.js-room-info-card__table-row-period');
    this.daysPeriodPrice = body.querySelector('.js-room-info-card__days-period-price');
    this.discount = body.querySelector('.js-room-info-card__discount');
    this.additionalCharges = body.querySelector('.js-room-info-card__additional-charges');
    this.finalCost = body.querySelector('.js-room-info-card__final-cost');
  }

  _initComponents() {
    const { body } = this;
    this.dateDropdown = new DateDropdown(body);
    this.dropdown = new Dropdown(body);
  }

  _subscribeToDateChanges() {
    this.dateDropdown.observeDateChanges(this._calculateTheFinalCost.bind(this));
  }

  _getPeriodDays(dates) {
    const [arrDate, depDate] = dates.split('-').map((date) => {
      const [day, month, year] = date.split('.').map((item) => parseInt(item));

      return new Date(year, month, day);
    });
    const oneDay = 1000 * 60 * 60 * 24; // Get 1 day in milliseconds
    const periodDays = Math.abs((arrDate.getTime() - depDate.getTime()) / oneDay);

    return periodDays;
  }

  _calculateTheFinalCost(dates) {
    const isSelectedDate = (date) => {
      const isUndefined = date === undefined;
      const isEmpty = date === '';

      if (!isUndefined && !isEmpty) return true;
      return false;
    };

    if (isSelectedDate(dates)) {
      const isRange = dates.indexOf('-') !== -1;
      
      if (isRange) {
        const pricePerDay = this.pricePerDay.innerHTML.replace(/\s/g, '');
        const periodNumber = this._getPeriodDays(dates);
        const daysPeriodPrice = parseInt(pricePerDay) * parseInt(periodNumber);
        const discount = this.discount.innerHTML.replace(/\s/g, '');
        const additionalCharges = this.additionalCharges.innerHTML.replace(/\s/g, '');
        const finalCost = (daysPeriodPrice - parseInt(discount)) + parseInt(additionalCharges);

        this.daysPeriod.innerHTML = periodNumber;
        this.daysPeriodPrice.innerHTML = daysPeriodPrice.toLocaleString();
        this.finalCost.innerHTML = finalCost.toLocaleString();
      }
    }
  }
}

export default RoomInfoCard;
