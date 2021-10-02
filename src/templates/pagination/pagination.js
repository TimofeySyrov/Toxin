import '../../../libs/simplePagination.js-master/jquery.simplePagination';

class Pagination {
  constructor(elem) {
    this.$container = $(elem);
    this.$pagBody = this.$container.find('.js-pagination__body');
    this.$pagTittle = this.$container.find('.js-pagination__tittle');

    this.init();
  }

  init() {
    this.$pagBody.pagination({
      items: 15,
      itemsOnPage: 1,
      displayedPages: 3,
      edges: 1,
      prevText: 'arrow_back',
      nextText: 'arrow_forward',
      onPageClick: (pageNumber) => {
        this.$pagTittle.html(`${(pageNumber * 12) - 11} – ${pageNumber * 12} из 100+ вариантов аренды`);
      },
    });
  }
}

export default Pagination;
