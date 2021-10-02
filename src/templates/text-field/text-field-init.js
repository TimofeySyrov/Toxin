import TextField from './text-field';

$(() => {
  const $textFields = $('.js-text-field');

  $textFields.each((i, val) => {
    const textInput = $(val).find('.js-text-field-input');
    const isMaskedTextField = $(textInput).hasClass('text-field__masked');

    if (isMaskedTextField) {
      new TextField(val);
    }
  });
});
