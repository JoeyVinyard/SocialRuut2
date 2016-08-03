var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Include the index.html file
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static('public'));

http.listen(process.env.PORT || 81, function(){
  console.log('listening on *:81');
});