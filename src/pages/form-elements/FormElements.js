import TextField from '../../templates/text-field/text-field';
import Dropdown from '../../templates/dropdown/dropdown';
import DateDropdown from '../../templates/date-dropdown/date-dropdown';
import FilterDateDropdown from '../../templates/filter-date-dropdown/filter-date-dropdown';
import LikeButton from '../../templates/like-button/like-button';
import RateButton from '../../templates/rate-button/rate-button';
import RangeSlider from '../../templates/range-slider/range-slider';
import Pagination from '../../templates/pagination/pagination';
import CheckboxList from '../../templates/checkbox-list/checkbox-list';
import UserComment from '../../templates/user-comment/user-comment';
import './form-elements.scss';

class FormElements {
  constructor() {
    this._initComponents();
  }

  _initComponents() {
    const {
      textField,
      dropdown,
      dateDropdown,
      filterDateDropdown,
      likeButton,
      rateButton,
      rangeSlider,
      pagination,
      checkboxList,
      userComment,
    } = this._getDOMElements();

    new Pagination(pagination, {
      items: 180,
      pageSize: 12,
      pageRange: 3,
    });
    textField.forEach((item) => new TextField(item));
    dropdown.forEach((item) => new Dropdown(item));
    dateDropdown.forEach((item) => new DateDropdown(item));
    filterDateDropdown.forEach((item) => new FilterDateDropdown(item));
    likeButton.forEach((item) => new LikeButton(item));
    rateButton.forEach((item) => new RateButton(item));
    rangeSlider.forEach((item) => new RangeSlider(item));
    checkboxList.forEach((item) => new CheckboxList(item));
    userComment.forEach((item) => new UserComment(item));
  }

  _getDOMElements() {
    return {
      pagination: document.querySelector('.js-pagination-item'),
      textField: document.querySelectorAll('.js-text-field-item'),
      dropdown: document.querySelectorAll('.js-dropdown-item'),
      dateDropdown: document.querySelectorAll('.js-date-dropdown-item'),
      filterDateDropdown: document.querySelectorAll('.js-filter-date-dropdown-item'),
      likeButton: document.querySelectorAll('.js-like-button-item'),
      rateButton: document.querySelectorAll('.js-rate-button-item'),
      rangeSlider: document.querySelectorAll('.js-range-slider-item'),
      checkboxList: document.querySelectorAll('.js-checkbox-list-item'),
      userComment: document.querySelectorAll('.js-user-comment-item'),
    };
  }
}

export default FormElements;
