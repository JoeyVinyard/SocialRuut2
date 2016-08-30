var server = io();
server.on('initUser', function(clients){
	for(var i = 1; i < clients.length; i++){
		createNewSquare(clients[i-1]);
	}
	localSquareID = clients.length;
});
server.on('addNewUser', function(clientInfo){
	createNewSquare(clientInfo);
});
server.on('userLeft', function(index){
	console.log("removing user in index " + index);
	squares.splice(index, 1);
});