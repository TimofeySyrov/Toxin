import '../../../libs/simplePagination.js-master/jquery.simplePagination';

class Pagination {
  constructor(domParent, options) {
    this.options = options;
    this.$body = $(domParent).find('.js-pagination');
    this.$pagBody = this.$body.find('.js-pagination__body');
    this.$currentMin = this.$body.find('.js-pagination__title-current-min');
    this.$currentMax = this.$body.find('.js-pagination__title-current-max');
    this.$allItemsCount = this.$body.find('.js-pagination__title-items-count');

    this._init();
  }

  _init() {
    const { items, pageSize, pageRange } = this.options;
    const amountAllItems = items * pageSize;

    this.$pagBody.pagination({
      items,
      itemsOnPage: pageSize,
      displayedPages: pageRange,
      edges: 1,
      prevText: 'arrow_back',
      nextText: 'arrow_forward',
      onPageClick: this._updateCurrentCounts.bind(this),
    });

    this._updateAllItemsCount(amountAllItems);
  }

  _updateAllItemsCount(count) {
    const { $allItemsCount } = this;
    const isCountMoreThanHundred = count > 100;

    $allItemsCount.html(`${isCountMoreThanHundred ? '100+' : count}`);
  }

  _updateCurrentCounts(pageNumber) {
    const { pageSize } = this.options;
    const { $currentMin, $currentMax } = this;
    const max = pageNumber * pageSize;
    const min = max - (pageSize - 1);

    $currentMin.html(`${min}`);
    $currentMax.html(`${max}`);
  }
}

export default Pagination;
