import Header from '../../templates/header/header';
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

    new Header(document);
    new Pagination(pagination, {
      items: 180,
      pageSize: 12,
      pageRange: 3,
    });
    filterDateDropdown.forEach((item) => new FilterDateDropdown(item));
    dropdown.forEach((item) => new Dropdown(item));
    rangeSlider.forEach((item) => new RangeSlider(item));
    checkboxList.forEach((item) => new CheckboxList(item));
    cutawayRoomCard.forEach((item) => new CutawayRoomCard(item));
  }

  _getDOMElements() {
    return {
      pagination: document.querySelector('[data-component-name="pagination"]'),
      filterDateDropdown: document.querySelectorAll('[data-component-name="filter-date-dropdown"]'),
      dropdown: document.querySelectorAll('[data-component-name="dropdown"]'),
      rangeSlider: document.querySelectorAll('[data-component-name="range-slider"]'),
      checkboxList: document.querySelectorAll('[data-component-name="checkbox-list"]'),
      cutawayRoomCard: document.querySelectorAll('[data-component-name="cutaway-room-card"]'),
    };
  }
}

export default SearchRoom;
