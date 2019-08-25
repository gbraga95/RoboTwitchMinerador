const _tmi = require('tmi.js');

class connectTwitch {
    sendConnect(user, pass, channels) {
        const tmi = require('tmi.js');
                 
        const opts = {
          identity: {
            username: user,
            password: pass,
          },
         
          channels: channels
        };
        
        const client = new tmi.client(opts);
        
        client.on('connected', onConnectedHandler);
        
        client.connect();
        
        function rollDice () {
          const sides = 6;
          return Math.floor(Math.random() * sides) + 1;
        }
        
        function onConnectedHandler (addr, port) {
          console.log(`* Connected to ${addr}:${port}`);
        }
    }
}

module.exports = connectTwitch;