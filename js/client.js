//Initialize socket.io object
const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const messageContainer = document.querySelector(".container");

//Audio that will play when receiving messages
var audio = new Audio("notification.mp3");

//Append event info to message
const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.classList.add(position);
    if(position=="center")
        messageElement.classList.add("user-joined-or-left");
    else
        messageElement.classList.add("message");
    messageContainer.append(messageElement);
    if(position=="left")//Play audio if message is received
        audio.play();
}

//Handle submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append("<span class='user-name'>You</span>: "+message,"right");
    socket.emit('send', message);//Trigger send message event
    messageInput.value = "";
});

//Get name from user
let name = prompt("Enter your name to join");
if(!name)//If user does not enter any name, set name to "No Name"
    name = "No Name";

//Trigger new user joined event
socket.emit('new-user-joined',name);

//Handle user joined event
socket.on('user-joined', name=>{
    append(`${name} joined the chat`,"center");
});

//Handle receive event
socket.on('receive', data=>{
    append("<span class='user-name'>"+data.name+"</span>: "+data.message,"left");
});

//Handle user left event
socket.on('left', name=>{
    append(`${name} left the chat`,"center");
});
 
