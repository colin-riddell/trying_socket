var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var connecton_name = ''

app.get('/chat', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});

io.on('connection', function(socket){
  //console.log('a user connected');

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('chat name', function(name){
  	if (connecton_name == ""){
  		connecton_name = name;
  	}
    console.log('sent by: ' + connecton_name);
  });
});
 /* socket.on('disconnect', function(){
    console.log('user disconnected');
  });

*/


http.listen(3000, function(){
  console.log('listening on *:3000');
});
