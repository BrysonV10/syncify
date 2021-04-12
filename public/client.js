const socket = io();
const allgood = document.getElementById("allgood")
const status = document.getElementById("status");
if(navigator.platform == "iPhone"){
  alert("Warning: this site may not work on iPhones.")
}
socket.on("connect", () => {
  allgood.style.display = "block";
  document.getElementById("status").innerHTML = "Next, click the button below and turn your volume up to 100%. Don't worry, nothing will play yet.";
})
socket.on("r-msg", msg => {
  console.log("msg recieved");
  document.getElementById("msg").innerHTML = msg.message;
  console.log(msg);
  document.title = "New Message!!";
  setTimeout(() => {
    document.title = "AF 2021"
  }, 2000)
});
socket.on("lol", (data) => {
  document.getElementById("audio").currentTime = 0;
  document.getElementById("audio").play();
  status.innerHTML = "Music is playing in sync with " + data.devices + " other devices!!"
  document.getElementById("audio").style.display = "block";
});
allgood.onclick = () => {
  allgood.style.display = "none";
  document.getElementById("status").innerHTML = "You are all set! The host can send messages to you. In the case of a message, they will appear below and your tab title will update. Get ready to sit back and watch the madness ;)"
}

