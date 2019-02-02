const socket = io();

socket.on('connect', () => {
  console.log('connected to server');
})

socket.on('disconnect', () => {
  console.log('disconnected to server');
});

socket.on('newMessage', (message) => {
  console.log(message);
});

socket.emit('createMessage', {
  from: 'k',
  text: 'hi'
}, function (confirmation) {
  console.log(confirmation);
  console.log('callback of acknowledgement');
});
