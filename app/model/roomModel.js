'use strict';
var sql = require('./db.js');
const mc = require('./db.js');

var Room =function(code){
    this.roomcode = code;
};

Room.createRoom = function(room, result) {
    sql.query("INSERT INTO rooms set ?", room, function(err, res) {
        if(err) {
            console.log("error: ",err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Room.getRooms = function(conres, senres) {
    mc.query('SELECT * FROM rooms', (err,rows) => {
        if (err) throw err;
        
        console.log(conres);
    });
}
module.exports = Room;