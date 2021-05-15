let clicked = $('.like-btn').attr('data');
let count = document.querySelector('.like-btn__count');
let icon = document.querySelector('.material-icons');

$(function(){
    if (clicked=="true") {
        $('.like-btn').attr('class', 'like-btn like-btn__bl-active');
        $('.like-btn__icon').attr('class', 'like-btn__icon like-btn__icon__bl-active');
        icon.textContent = 'favorite';
    } else {
        $('.like-btn').attr('class', 'like-btn');
        $('.like-btn__icon').attr('class', 'like-btn__icon');
        icon.textContent = 'favorite_border';
    }
});

$('.like-btn').click(function(){
    if (clicked=="false") {
        clicked = "true";
        $('.like-btn').attr('class', 'like-btn like-btn__bl-active');
        $('.like-btn__icon').attr('class', 'like-btn__icon like-btn__icon__bl-active');
        icon.textContent = 'favorite';
        count.textContent++;
    } else {
        clicked = "false";
        $('.like-btn').attr('class', 'like-btn');
        $('.like-btn__icon').attr('class', 'like-btn__icon');
        icon.textContent = 'favorite_border';
        count.textContent--;
    }
});