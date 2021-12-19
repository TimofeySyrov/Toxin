import Header from '../../templates/header/header';
import StartFilter from '../../templates/start-filter/start-filter';
import './index.scss';

class Index {
  constructor() {
    this._initComponents();
  }

  _initComponents() {
    const { startFilter } = this._getDOMElements();

    new Header(document);
    startFilter.forEach((item) => new StartFilter(item));
  }

  _getDOMElements() {
    return {
      startFilter: document.querySelectorAll('.js-start-filter-item'),
    };
  }
}

export default new Index();
