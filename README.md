# My Chat App

A chat app which uses Node.js and Socket.io. 

### Prerequisites

Following should be installed before running the project

```
Node 
```

### Installing

1. Install necessary dependencies

```
cd nodeServer
npm install socket.io
npm install nodemon
```

2. To run the project locally using nodemon

```
nodemon .\index.js
```
3. Navigate to the following URL to launch app

```
http://127.0.0.1:5500/index.html
```

# How to use app
When prompted, enter user name. 
Open another tab and enter user name again. 
Go to first tab and you can see that "...user joined the chat" message.
Send a message from first tab. You can see the message in the second tab. 
Send a message from the second tab and you can see it in the first tab. 
A small notification sound plays each time a message is received. 
Closing a tab will result in "...user left chat" message.
You can create multiple users by opening new tabs.


# Limitations

```
When message is sent to a user before he/she makes any action (ex. click), the notification sound will not play as Chrome does not allow this.
```