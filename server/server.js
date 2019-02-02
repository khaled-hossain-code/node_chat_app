const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.port || 3000;
const publicPath = path.join(__dirname, '../public');

const {generateMessage} = require('./utils/message');
const Users = require('./utils/users');
const users = new Users();

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User Connected');
  //if user is not valid then disconnect the user

  socket.on('survey', (params, callback) => {
    
    //check if the survey is valid for that user else return callback('Invalid survey')
    users.addUser(socket.id, params.name, params.surveyID);


  })
  // greeting from admin to user
  socket.emit('newMessage', generateMessage({from: 'admin', text: 'Welcome to chatroom'}))

  // let others know new user joined from admin
  socket.broadcast.emit('newMessage', generateMessage({from: 'admin', text: 'New user joined to chatroom'}))

  socket.on('disconnect', () => {
    var user = users.removeUser(socket.id);
    console.log('User got disconnected');
  });

  socket.on('createMessage', (message, callback) => {
    io.emit('newMessage', generateMessage(message)); //io emits to all sockets including itself
    // socket.broadcast.emit('newMessage', message); //io emits to all sockets excluding itself
    callback({
      confirm: 'yes'
    });
  })
})

server.listen(port, () => console.log(`Server is running on ${port}`))