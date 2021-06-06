import AirCalendar from './calendar';

$(() => {
    let $allcalendars = $('.js-date-picker-calendar');
    $allcalendars.each((i, val) => {
        new AirCalendar(val);
    });   
});