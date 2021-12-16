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
    this.textFields = [];
    this.dropdowns = [];
    this.dateDropdowns = [];
    this.filterDateDropdowns = [];
    this.likeButtons = [];
    this.rateButtons = [];
    this.rangeSliders = [];
    this.paginations = [];
    this.checkboxLists = [];
    this.userComments = [];

    this.paginations.push(new Pagination(pagination, {
      items: 180,
      pageSize: 12,
      pageRange: 3,
    }));
    textField.forEach((item) => {
      this.textFields.push(new TextField(item));
    });
    dropdown.forEach((item) => {
      this.dropdowns.push(new Dropdown(item));
    });
    dateDropdown.forEach((item) => {
      this.dateDropdowns.push(new DateDropdown(item));
    });
    filterDateDropdown.forEach((item) => {
      this.filterDateDropdowns.push(new FilterDateDropdown(item));
    });
    likeButton.forEach((item) => {
      this.likeButtons.push(new LikeButton(item));
    });
    rateButton.forEach((item) => {
      this.rateButtons.push(new RateButton(item));
    });
    rangeSlider.forEach((item) => {
      this.rangeSliders.push(new RangeSlider(item));
    });
    checkboxList.forEach((item) => {
      this.checkboxLists.push(new CheckboxList(item));
    });
    userComment.forEach((item) => {
      this.userComments.push(new UserComment(item));
    });
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

export default new FormElements();
