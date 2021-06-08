import AirCalendar from './calendar';

//Для вставки самого календаря на страницу без полей вывода
$(() => {
    let $allcalendars = $('.js-date-picker-calendar');
    $allcalendars.each((i, val) => {
        new AirCalendar(val);
    });   
});