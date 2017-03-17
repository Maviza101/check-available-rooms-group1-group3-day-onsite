'use strict'

var app = require('./getRoom.js');


describe("Test for room type ", function() {
	
  

    it("should return the room object", function() {


    	expect(app.getRooms('meetings')).toEqual(meetings);
    	
    });


    it("should return the room object", function() {

    	expect(app.getRooms('games')).toEqual(games);
    });


    it("should return the room object", function() {

      expect(app.getRooms('learning')).toEqual(learning);
    });


    it("should return the room object", function() {
    	
      expect(app.getRooms('working')).toEqual(working);
    });
    

})


var meetings = [{"name": "Room1", "type": "meetings", "available": true},
	                {"name": "Room2", "type": "meetings", "available": true},
	                {"name": "Room5", "type": "meetings", "available": false}];
	
var games = 	[{"name": "Room3", "type": "games", "available": false},
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





