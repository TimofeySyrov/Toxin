import FilterDateDropdown from '../../templates/filter-date-dropdown/filter-date-dropdown';
import Dropdown from '../../templates/dropdown/dropdown';
import RangeSlider from '../../templates/range-slider/range-slider';
import CheckboxList from '../../templates/checkbox-list/checkbox-list';
import CutawayRoomCard from '../../templates/cutaway-room-card/cutaway-room-card';
import Pagination from '../../templates/pagination/pagination';
import './search-room.scss';

class SearchRoom {
  constructor() {
    this._initComponents();
  }

  _initComponents() {
    const {
      filterDateDropdown,
      dropdown,
      rangeSlider,
      checkboxList,
      cutawayRoomCard,
      pagination,
    } = this._getDOMElements();
    this.filterDateDropdowns = [];
    this.dropdowns = [];
    this.rangeSliders = [];
    this.checkboxLists = [];
    this.cutawayRoomCards = [];
    this.paginations = [];

    this.paginations.push(new Pagination(pagination, {
      items: 180,
      pageSize: 12,
      pageRange: 3,
    }));
    filterDateDropdown.forEach((item) => {
      this.filterDateDropdowns.push(new FilterDateDropdown(item));
    });
    dropdown.forEach((item) => {
      this.dropdowns.push(new Dropdown(item));
    });
    rangeSlider.forEach((item) => {
      this.rangeSliders.push(new RangeSlider(item));
    });
    checkboxList.forEach((item) => {
      this.checkboxLists.push(new CheckboxList(item));
    });
    cutawayRoomCard.forEach((item) => {
      this.cutawayRoomCards.push(new CutawayRoomCard(item));
    });
  }

  _getDOMElements() {
    return {
      pagination: document.querySelector('.js-pagintation-item'),
      filterDateDropdown: document.querySelectorAll('.js-filter-date-dropdown-item'),
      dropdown: document.querySelectorAll('.js-dropdown-item'),
      rangeSlider: document.querySelectorAll('.js-range-slider-item'),
      checkboxList: document.querySelectorAll('.js-checkbox-list-item'),
      cutawayRoomCard: document.querySelectorAll('.js-cutaway-room-card'),
    };
  }
}

export default new SearchRoom();
