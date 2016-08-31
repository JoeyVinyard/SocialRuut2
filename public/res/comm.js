var server = io();
server.on('initUser', function(clients){
	console.log(clients.length);
	for(var i = 0; i < clients.length; i++){
		console.log("adding " + i);
		createNewSquare(clients[i]);
	}
	localSquareID = clients.length -1;
	//console.log(localSquareID);
	prepCanv();
});
server.on('addNewUser', function(clientInfo){
	if(clientInfo.i != squares[localSquareID].i){
		console.log("adding new user");
	}
});
server.on('userLeft', function(index){
	console.log("removing user in index " + index);
	squares.splice(index, 1);
});