# Syncify
## A practical joke for a technological time


### Features:
- Music syncing
- Simple installation and instructions
- Message capability (one way)
- Tracking number of connected users

Client page:
![Client page](https://github.com/BrysonV10/syncify/blob/extras/Screenshot%202021-04-12%2012.58.09%20PM.png?raw=true)
Host page:
![Host side](https://github.com/BrysonV10/syncify/blob/extras/edited.png?raw=true)

Want to play a prank on a friend, coworker, or other unsuspecting people?
Use this joke. Its simple. 

To host on a PC, Mac, or Linux:
1. Install Node.JS and NPM on your computer - [Node.JS download](https://nodejs.org/en/) **Linux users can use their package manager to install Node.JS**
2. Install dependencies - `npm install`
3. Go into `views/client.html` and change the URL in the <source> tag to an mp3 file - I've provided Bon Jovi's *You give love a bad name*.
4. Go into `public/host.js` and change the password. There is a comment showing where.
5. Run the server - `npm start`
6. Have one person (the host) go to `/host` 
7. Have all others go to `/` and follow the instructions. This won't work on iPads or iPhones due to security protocols on these devices.
8. When everyone is connected, click the start sound button on the host panel to start music on all connected devices. 
 --You can send messages to connected clients
 
 
## To Use with Glitch (simpler setup)
1. Go [here](https://glitch.com/edit/#!/syncify-app). Click "syncify-app" in the top left and select "Remix Project". It may require you to create a glitch account. 
2. Click on the new project name in the top left corner when your new project loads. Change the name to something you can share. 
3. Go into `views/client.html` and change the URL in the <source> tag to an mp3 file - I've provided Bon Jovi's *You give love a bad name*.
4. Go into `public/host.js` and change the password. There is a comment (`/*change here*/`) showing where.
5. Have one person (the host) go to `/host` 
6. Have all others go to `/` and follow the instructions. This won't work on iPads or iPhones due to security protocols on these devices.
7. When everyone is connected, click the start sound button on the host panel to start music on all connected devices. 
 --You can send messages to connected clients

 #### Note - you need to input the password in order to send messages and start the sound.
 *Currently you can not stop the sound from the host panel, individual clients can stop the sound.*
