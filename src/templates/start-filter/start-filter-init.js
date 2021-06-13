import StartFilter from './start-filter';

$(() => {
    let $filter = $('.js-start-filter');
    $filter.each((i, val) => {
        new StartFilter(val);
    });   
});