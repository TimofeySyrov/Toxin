import Header from '../../templates/header/header';
import StartFilter from '../../templates/start-filter/start-filter';
import './index.scss';

class Index {
  constructor() {
    this._initComponents();
  }

  _initComponents() {
    const { startFilter } = this._getDOMElements();
    this.startFilters = [];
    this.headers = [];

    this.headers.push(new Header(document));
    startFilter.forEach((item) => {
      this.startFilters.push(new StartFilter(item));
    });
  }

  _getDOMElements() {
    return {
      startFilter: document.querySelectorAll('.js-start-filter-item'),
    };
  }
}

export default new Index();
