import RoomMainCard from './room-info-card';

$(() => {
  let $RMC = $('.js-room-info-card');
  $RMC.each((i, val) => {
    new RoomMainCard(val);
  });   
});