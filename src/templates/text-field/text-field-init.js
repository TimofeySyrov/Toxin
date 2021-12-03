import TextField from './text-field';

$(() => {
  const $textFields = $('.js-text-field__input_masked');

  $textFields.each((i, val) => new TextField(val));
});
