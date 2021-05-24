import TextField from './text-field';

$(() => {
    let $textFields = $('.js-text-field');
    $textFields.each((i, val) => {
        let isMaskedTextField = $(val).hasClass('text-field__masked');
        if(isMaskedTextField) {
            new TextField(val);
        }
    });   
});