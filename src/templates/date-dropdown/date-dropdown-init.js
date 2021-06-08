import DateDropdown from "./date-dropdown";

$(() => {
    let $DateDropdown = $('.js-date-dropdown');
    $DateDropdown.each((i, val) => {
        new DateDropdown(val);
    });   
});