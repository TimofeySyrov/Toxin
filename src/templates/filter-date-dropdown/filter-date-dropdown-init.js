import FilterDateDropdown from "./filter-date-dropdown";

$(() => {
  let $FilterDD = $('.js-filter-date-dropdown');
  $FilterDD.each((i, val) => {
    new FilterDateDropdown(val);
  });   
});