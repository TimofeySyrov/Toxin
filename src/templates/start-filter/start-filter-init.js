import StartFilter from './start-filter';

$(() => {
  const $filter = $('.js-start-filter');

  $filter.each((i, val) => {
    new StartFilter(val);
  });
});
