var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var client = {
	i		: 0,
	socki 		: 0,
	xp		: genPos(),
	yp		: genPos(),
	col		: genColor()
}
var clients = [];//Initialize a new array to hold all the clients
var newClient;
io.on('connection', function(user){
	console.log('user connected');
	//Transmit to the new client that it was created
	newClient = Object.create(client);
	newClient.i = clients.length + 1;
	newClient.socki = user.id;
	clients.push(newClient);
	user.emit('initUser', clients);
	io.emit('addNewUser', newClient);
	//Add the new client to the end of the client list

	// client.on('clientInfo', function(pos){
	// 	io.emit('clientInfo', pos);
	// });
	// //Fires when the client moves its mouse
	// client.on('mouseMove', function(mousePos){
	// 	//Loop through the clients and transmit to all of them that a client has moved
	// 	for(items in clients){
	// 		//Ignores the client that moved its mouse
	// 		if(clients[items] != client.id){
	// 			var idMouse = mousePos;
	// 			newID = Number((clients.indexOf(client.id) + 1));
	// 			idMouse.id = newID
	// 			io.sockets.connected[clients[items]].emit('clientMoved', idMouse);
	// 		}
	// 	}
	// });
	// //Fires when a client disconnects
	// user.on('disconnect', function(){
	// 	console.log("A user disconnected")
	// 	var indexOfLeave = clients.indexOf(user.id);
	// 	//Removes the disconnected client from the list
	// 	clients.splice(indexOfLeave, 1)
	// 	for(items in clients){
	// 		if(clients[items].sockI != user.id){
	// 			//Tells each of the remaining clients that somebody left
	// 			io.sockets.connected[clients[items].sockI].emit('userLeft', indexOfLeave);
	// 		}
	// 	}
	// })
});

function genPos(){
	if(Math.floor(Math.random()*2) == 1){
		return Math.floor(Math.random()*1000);		
	}
	else{
		return Math.floor(Math.random()*-1000);	
	}
}
function genColor(){
	//Generates a random 6 digit number to be used as a color
	var num = Math.floor(Math.random() * (999999-111111)) + 111111;
	return "#" + num;
}

//Include the index.html file
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static('public'));

http.listen(process.env.PORT || 81, function(){
  console.log('listening on *:81');
});