//Node server which will handle socket io connections
//const io = require('socket.io')(8000);
const io = require('socket.io')(8000, {
    cors: {
      origin: '*',//Allow CORS
    }
});

const users = {};

io.on('connection', socket => {
    //When a new user joins, let other users know
    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    //When a user sends a message, broadcast it to other users
    socket.on('send', message => {
        socket.broadcast.emit('receive', {message:message, name: users[socket.id]});
    });

    //When a new user leaves, let other users know
    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
})