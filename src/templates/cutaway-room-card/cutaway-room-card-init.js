import CutawayRoom from './cutaway-room-card';

$(() => {
  const cutawayRoomDoms = document.querySelectorAll('.js-cutaway-room-card');

  cutawayRoomDoms.forEach((item) => new CutawayRoom(item));
});
