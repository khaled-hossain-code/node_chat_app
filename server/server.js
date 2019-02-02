const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.port || 3000;
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User Connected');

  socket.on('disconnect', () => {
    console.log('User got disconnected');
  });

  socket.on('createEmail', (newEmail) => {
    console.log(newEmail);
  })

  socket.emit('newEmail', {
    from: 'mike@example.com',
    text: 'whats up?',
    createdAt: 123
  });
})

server.listen(port, () => console.log(`Server is running on ${port}`))