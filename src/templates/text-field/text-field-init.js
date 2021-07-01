import TextField from './text-field';

$(() => {
  let $textFields = $('.js-text-field');
  $textFields.each((i, val) => {
    let textInput = $(val).find('.js-text-field-input');
    let isMaskedTextField = $(textInput).hasClass('text-field__masked');
    if(isMaskedTextField) {
      new TextField(val);
    }
  });
});