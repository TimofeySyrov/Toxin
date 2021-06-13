import '../../../libs/simplePagination.js-master/jquery.simplePagination';

class Pagination {
    constructor(elem){
        this.pagBody = $(elem).find('.js-pagination__body');
        this.pagTittle = $(elem).find('.js-pagination__tittle');

        this.init();
    }

    init () {
        const pagBody = this.pagBody;
        const pagTittle = this.pagTittle;

        $(function() {
            $(pagBody).pagination({
                items: 15,
                itemsOnPage: 1,
                displayedPages: 3,
                edges: 1,
                prevText: 'arrow_back',
                nextText: 'arrow_forward',
                onPageClick: function (pageNumber, event){
                    $(pagTittle).html(((pageNumber*12)-11)+' – '+ (pageNumber*12) + ' из 100+ вариантов аренды');
                }
            });
        });
    }
}

export default Pagination;