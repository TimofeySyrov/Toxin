import RateButton from './rate-button';

$(() => {
    const $rateButtons = $('.js-rate-button');    

    $rateButtons.each((i, val) => {
        new RateButton(val);
    });
});