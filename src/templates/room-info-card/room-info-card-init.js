import RoomMainCard from './room-info-card';

$(() => {
    let $RMC = $('.js-room-main-card');
    $RMC.each((i, val) => {
        new RoomMainCard(val);
    });   
});