var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;



app.use('/static', express.static('static'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('addUser', function(msg){
    io.emit('addUser', msg);
  });
  
  
  socket.on('startPoll', function(msg){
    io.emit('startPoll', msg);
  });
  
  socket.on('submitAnswer', function(msg){
    io.emit('submitAnswer', msg);
  });
  
  socket.on('finishQuiz', function(msg){
    io.emit('finishQuiz', msg);
  });
  
  
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
