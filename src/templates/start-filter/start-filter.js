import DateDropdown from '../date-dropdown/date-dropdown';
import Dropdown from '../dropdown/dropdown';

class StartFilter {
  constructor(domParent, dropdownPhraseKey) {
    this.body = domParent.querySelector('.js-start-filter');
    this.dropdownPhraseKey = dropdownPhraseKey;

    this._init();
  }

  _init() {
    const { body, dropdownPhraseKey } = this;
    this.dateDropdown = new DateDropdown(body);
    this.dropdown = new Dropdown(body, dropdownPhraseKey);
  }
}

export default StartFilter;
