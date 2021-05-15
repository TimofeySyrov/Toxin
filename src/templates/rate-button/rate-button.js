import 'jquery-bar-rating/dist/jquery.barrating.min';

var a = null;

$(function(){
    a = $('.js-widget-rate-button').attr('data-rating');
});

$(function() {
    $('.js-widget-rate-button').barrating({
        theme: 'css-stars',
        showSelectedRating: false,
        showValues: false,
        initialRating: a
    });
});