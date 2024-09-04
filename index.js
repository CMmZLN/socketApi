let express = require("express");
let socket = require("socket.io");

let app = express();

let server = app.listen(4000,()=>{
  console.log("Port is running at 3000")
});


app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});

// ------Socket setup-------
let io = socket(server);

console.log( io);
io.on("connection",(socket) =>{
  console.log(`socket connetion connected ${socket.id}`);

  socket.on("message", (msg) => {
    console.log(`Message received: ${msg}`);
    // Broadcast the message to all other clients
    socket.broadcast.emit("chat message", msg);
  });
});


/* 
const express = require("express");

const socket = require("socket.io");

const app = express();

const server = app.listen(4000, ()=>{
  console.log("server is starting at port 4000");
});

app.get("/",(req, res) =>{
  res.sendFile(__dirname+"/public/index.js");
  });

const io= socket(server);

io.on("connetion", (socket)=>{
  console.log("socket connection connected ${socket.id}")
  })

*/