function getRooms (type) {
	var meetings = [{"name": "Room1", "type": "meetings", "available": true},
	                {"name": "Room2", "type": "meetings", "available": true},
	                {"name": "Room5", "type": "meetings", "available": false}];
	
	var games = [{"name": "Room3", "type": "games", "available": false},
	             {"name": "Room7", "type": "games", "available": false},
	             {"name": "Room4", "type": "games", "available": true}];
	
	var quiet_time = [{"name": "Room6", "type": "quiet_time", "available": true},
	                  {"name": "Room8", "type": "quiet_time", "available": true},
	                  {"name": "Room9", "type": "quiet_time", "available": true}];
	
	var learning = [{"name": "Room10", "type": "learning", "available": false},
	                {"name": "Room11", "type": "learning", "available": false},
	                {"name": "Room12", "type": "learning", "available": true}];
	
	var working = [{"name": "Room13", "type": "working", "available": false},
	               {"name": "Room14", "type": "working", "available": false},
	               {"name": "Room15", "type": "working", "available": true}];

	switch (type) {
		case "meetings":
			return meetings;
			break;

    case "games":
    	return games;
    	break;

    case "learning":
    	return learning;
    	break;

    case "working":
    	return working;
    	break;

    case "quiet-time":
    	return working;
    	break;


	}
		
}

