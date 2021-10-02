import Pagination from './pagination';

$(() => {
  $('.js-pagination').each((i, val) => {
    new Pagination(val);
  });
});
