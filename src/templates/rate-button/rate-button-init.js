import RateButton from './rate-button';

$(() => {
  $('.js-rate-button').each((i, val) => {
    new RateButton(val);
  });
});
