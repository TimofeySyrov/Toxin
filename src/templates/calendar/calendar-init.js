import AirCalendar from './calendar';

$(() => {
  const $allcalendars = $('.js-date-picker-calendar');
  $allcalendars.each((i, val) => {
    new AirCalendar(val);
  });
});
