const socket = io();
const password = "password" //Adjust host password here
const input = document.getElementById("msg-input")
const lolbutton = document.getElementById("start-sound")
const pass = document.getElementById('password')
function checkDatThingy(){
  if(pass.value === password){
    return true
  } else {
    return false
  }
}


document.getElementById("send-msg").addEventListener("click", () => {
  if(checkDatThingy()){
    socket.emit("msg", {message: input.value});
    input.value = "";
  } else {
    alert("Bad Password")
  }
}) 

socket.on("people", (data) => {
  console.log(data.people)
  document.getElementById("current").innerHTML = "Connected Users: " + data.people.toString();
})

function getPeople(){
  socket.emit("people-ask");
}

setInterval(getPeople, 1000)

lolbutton.onclick = () => {
  if(checkDatThingy()){
    socket.emit("lol")
  } else {
    alert("Bad Password")
  }
  
}


document.getElementById("urldsp").innerHTML = "    " + window.location.hostname + "    ";