
const express = require("express");
const app = express();
const http = require('http').createServer(app);
const socket = require('socket.io')
const io = socket(http);
var connected = 0;



// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/client", (req, res) => {
  res.sendFile(__dirname + "/views/client.html")
})

app.get("/host", (req, res) => {
  res.sendFile(__dirname + "/views/host.html");
})

io.on("connection", (socket) => {
  connected+=1;
  console.log(connected)
  console.log("connection")
  socket.on("msg", (msg) => {
    console.log("msg");
    io.emit("r-msg", msg);
  })
  
  socket.on("people-ask", (socket) => {
    io.emit("people", {people: connected -1})
  })
  
  socket.on("lol", (socket) => {
    io.emit("lol", {devices: connected -1})
  })
  socket.on("disconnect", () => {
    console.log("disconnect")
    connected-=1;
  })
}) 





// listen for requests :)
const listener = http.listen(process.env.PORT, "0.0.0.0", () => {
  console.log("Your app is listening on port " + listener.address().port);
});
