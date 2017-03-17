'use strict';

$(document).ready(function() {
  $('#chooseRoomType').on('click', 'input', function() {
    var target = $('#rooms-available');
    target.empty();

    var roomType = this.val();
    if (roomType == '') {
      return;
    }
    var rooms = getRooms(roomType);
    for (var i = 0; i < rooms.length; i++) {
      var room = rooms[i];
      var tableRow = $('<tr>');

      var roomName = room.name;
      var roomNameCell = $('<td>');
      roomNameCell.text(roomName);

      var roomType = room.type;
      var roomTypeCell = $('<td>');
      roomTypeCell.text(roomType);

      var isRoomAvailable = room.available;
      var roomAvailabilityCell = $('<td>');
      if (isRoomAvailable) {
        roomAvailabilityCell.text('Available');
      }
      else {
        roomAvailabilityCell.text('Not available');
      }

      tableRow.append(roomNameCell);
      tableRow.append(roomTypeCell);
      tableRow.append(roomAvailabilityCell);

      target.append(tableRow);
    }
  });
});
