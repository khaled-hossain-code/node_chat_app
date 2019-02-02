const socket = io();

socket.on('connect', () => {
  console.log('connected to server');
})

socket.on('disconnect', () => {
  console.log('disconnected to server');
});

socket.on('newMessage', (message) => {
  console.log(message);
  let li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);
  
  jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//   from: 'k',
//   text: 'hi'
// }, function (confirmation) {
//   console.log(confirmation);
//   console.log('callback of acknowledgement');
// });

jQuery('#message-form').on('submit', function(e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function(){
    console.log('acknowledged');
  })
})
