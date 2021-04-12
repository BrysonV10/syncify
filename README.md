# Syncify
## A practical joke for a technological time

Client page:
![Client page](https://github.com/BrysonV10/syncify/blob/extras/Screenshot%202021-04-12%2012.58.09%20PM.png?raw=true)
Host page:
![Host side](https://github.com/BrysonV10/syncify/blob/extras/edited.png?raw=true)

Want to play a prank on a friend, coworker, or other unsuspecting people?
Use this joke. Its simple. 

1. Install Node.JS and NPM on your computer.
2. Install dependencies - `npm install`
3. Go into `views/client.html` and change the URL in the <source> tag to an mp3 file - I've provided Bon Jovi's *You give love a bad name*.
4. Go into `public/host.js` and change the password. There is a comment showing where.
5. Run the server - `npm start`
6. Have one person (the host) go to `/host` 
7. Have all others go to `/` and follow the instructions. This won't work on iPads or iPhones due to security protocols on these devices.
8. When everyone is connected, click the start sound button on the host panel to start music on all connected devices. 
 --You can send messages to connected clients
 
 #### Note - you need to input the password in order to send messages and start the sound.
 *Currently you can not stop the sound from the host panel, individual clients can stop the sound.*
