const socket = io();

socket.on('connect', () => {
  console.log('connected to server');
})

socket.on('disconnect', () => {
  console.log('disconnected to server');
});

socket.on('newEmail', (email) => {
  console.log('New Email', email);
});

socket.emit('createEmail', {
  to: 'jen@example.com',
  text: 'Hey, this is new mail'
});