import CutawayRoom from './cutaway-room-card';

$(() => {
    const $cutawayRoom = $('.js-cutaway-room-card');    

    $cutawayRoom.each((i, val) => {
        new CutawayRoom(val);
    });
});