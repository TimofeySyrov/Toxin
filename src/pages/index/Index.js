import StartFilter from '../../templates/start-filter/start-filter';
import './index.scss';

class Index {
  constructor() {
    this._initComponents();
  }

  _initComponents() {
    const { startFilter } = this._getDOMElements();

    this.startFilters = startFilter.map((item) => new StartFilter(item));
  }

  _getDOMElements() {
    return {
      startFilter: document.querySelectorAll('.js-start-filter-item'),
    };
  }
}

export default new Index();
