'use strict';

$(document).ready(function() {
  $('#choose-room-type').on('change', function(event) {
    var target = $('#rooms-available');

    var roomType = this.value;
    if (roomType == 'default') {
      return;
    }
    target.empty();
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
        roomAvailabilityCell.attr('class', 'alert-success');
      }
      else {
        roomAvailabilityCell.text('Not available');
        roomAvailabilityCell.attr('class', 'alert-danger');
      }

      tableRow.append(roomNameCell);
      tableRow.append(roomTypeCell);
      tableRow.append(roomAvailabilityCell);

      target.append(tableRow);
    }
  });
});
