var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var client = {
	i		: 0,
	socki 		: 0,
	xp		: 0,
	yp		: 0,
	col		: 0
}
var clients = [];//Initialize a new array to hold all the clients
var newClient;
io.on('connection', function(user){
	console.log('user connected');
	//Transmit to the new client that it was created
	newClient = Object.create(client);
	newClient.i = clients.length + 1;
	newClient.socki = user.id;
	newClient.xp = genPos();
	newClient.yp = genPos();
	newClient.col = genColor();
	clients.push(newClient);
	user.emit('initUser', clients);
	console.log("adding new user")
	io.emit('addNewUser', newClient);
	user.on('disconnect', function(){
		console.log("A user disconnected")
		for(var i = 0; i < clients.length; i++){
			if(user.id == clients[i].socki){
				var indexOfLeave = i;
			}
		}
		clients.splice(indexOfLeave, 1);
		io.emit('userLeft', indexOfLeave);
	})
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