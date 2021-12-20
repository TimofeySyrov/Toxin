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
      guestsDropdown,
      rangeSlider,
      roomAboutDropdown,
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
    guestsDropdown.forEach((item) => new Dropdown(item));
    rangeSlider.forEach((item) => new RangeSlider(item));
    roomAboutDropdown.forEach((item) => new Dropdown(item));
    checkboxList.forEach((item) => new CheckboxList(item));
    cutawayRoomCard.forEach((item) => new CutawayRoomCard(item));
  }

  _getDOMElements() {
    return {
      pagination: document.querySelector('.js-pagintation-block'),
      filterDateDropdown: document.querySelectorAll('.js-filter-room-sidebar__item_option_filter-date'),
      guestsDropdown: document.querySelectorAll('.js-filter-room-sidebar__item_option_guests-dropdown'),
      rangeSlider: document.querySelectorAll('.js-filter-room-sidebar__item_option_range-slider'),
      roomAboutDropdown: document.querySelectorAll('.js-filter-room-sidebar__item_option_room-about-dropdown'),
      checkboxList: document.querySelectorAll('.js-filter-room-sidebar__item_option_checkbox-list'),
      cutawayRoomCard: document.querySelectorAll('.js-rooms-list__item'),
    };
  }
}

export default SearchRoom;
