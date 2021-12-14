import DateDropdown from '../date-dropdown/date-dropdown';
import Dropdown from '../dropdown/dropdown';

class StartFilter {
  constructor(domParent) {
    this.body = domParent.querySelector('.js-start-filter');

    this._init();
  }

  _init() {
    const { body } = this;
    this.dateDropdown = new DateDropdown(body);
    this.dropdown = new Dropdown(body);
  }
}

export default StartFilter;
