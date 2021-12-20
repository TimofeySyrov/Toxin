import Header from '../../templates/header/header';
import './headers-footers.scss';

class HeadersFooters {
  constructor() {
    this._initComponents();
  }

  _initComponents() {
    const { headerUnreg, headerLoginIn } = this._getDOMElements();

    headerUnreg.forEach((item) => new Header(item));
    headerLoginIn.forEach((item) => new Header(item));
  }

  _getDOMElements() {
    return {
      headerUnreg: document.querySelectorAll('.js-article-header-unreg-user'),
      headerLoginIn: document.querySelectorAll('.js-article-header-authorized-user'),
    };
  }
}

export default HeadersFooters;
