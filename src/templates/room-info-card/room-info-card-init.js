import RoomMainCard from './room-info-card';

$(() => {
  const $roomMainCardDOM = $('.js-room-info-card');
  $roomMainCardDOM.each((i, val) => {
    new RoomMainCard(val);
  });
});
