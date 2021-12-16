import Header from '../../templates/header/header';
import './headers-footers.scss';

class HeadersFooters {
  constructor() {
    this._initComponents();
  }

  _initComponents() {
    const { header } = this._getDOMElements();
    this.headers = [];

    header.forEach((item) => this.headers.push(new Header(item)));
  }

  _getDOMElements() {
    return {
      header: document.querySelectorAll('.js-header-item'),
    };
  }
}

export default new HeadersFooters();
