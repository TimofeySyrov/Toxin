import FilterDateDropdown from './filter-date-dropdown';

$(() => {
  $('.js-filter-date-dropdown').forEach((i, val) => {
    new FilterDateDropdown(val);
  });
});
