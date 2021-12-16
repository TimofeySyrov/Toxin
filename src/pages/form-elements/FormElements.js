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

    this.textFields = textField.map((item) => new TextField(item));
    this.dropdowns = dropdown.map((item) => new Dropdown(item));
    this.dateDropdowns = dateDropdown.map((item) => new DateDropdown(item));
    this.filterDateDropdowns = filterDateDropdown.map((item) => (
      new FilterDateDropdown(item)
    ));
    this.likeButtons = likeButton.map((item) => new LikeButton(item));
    this.rateButtons = rateButton.map((item) => new RateButton(item));
    this.rangeSliders = rangeSlider.map((item) => new RangeSlider(item));
    this.paginations = pagination.map((item) => new Pagination(item));
    this.CheckboxLists = checkboxList.map((item) => new CheckboxList(item));
    this.userComments = userComment.map((item) => new UserComment(item));
  }

  _getDOMElements() {
    return {
      textField: document.querySelectorAll('.js-start-filter-item'),
      dropdown: document.querySelectorAll('.js-dropdown-item'),
      dateDropdown: document.querySelectorAll('.js-date-dropdown-item'),
      filterDateDropdown: document.querySelectorAll('.js-filter-date-dropdown-item'),
      likeButton: document.querySelectorAll('.js-like-button-item'),
      rateButton: document.querySelectorAll('.js-rate-button-item'),
      rangeSlider: document.querySelectorAll('.js-range-slider-item'),
      pagination: document.querySelectorAll('.js-pagination-item'),
      checkboxList: document.querySelectorAll('.js-checkbox-list-item'),
      userComment: document.querySelectorAll('.js-user-comment-item'),
    };
  }
}

export default new FormElements();
