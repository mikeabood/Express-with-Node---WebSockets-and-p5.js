console.log("My socket server is running"); 

//

var express = require('express'); 
var app = express(); 
var server = app.listen(3000); 

app.use(express.static('public')); 

//

var socket = require('socket.io');
var io = socket(server); 

io.sockets.on('connection', newConection); 

function newConnection(socket) {
	console.log('new connection: ' + socket.id);
	console.log(socket.id); 
}


