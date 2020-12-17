const app = require('express')(),
  http = require('http').createServer(app),
  io = require('socket.io')(http),
  port = 3001;

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.post('/click', function (request, response) {
  console.log("clicked via Express");
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    socket.emit('chat message', "ответка себе");
    socket.broadcast.emit('chat message', "широковещательная ответка");
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


http.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})


