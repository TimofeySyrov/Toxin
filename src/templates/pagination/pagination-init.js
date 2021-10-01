import Pagination from './pagination';

$(() => {
  let $pag = $('.js-pagination');
  $pag.each((i, val) => {
    new Pagination(val);
  });   
});