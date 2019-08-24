const tmi = require('tmi.js');
const _user = 'botminerador';
const _pass = 'oauth:6vtdxi6lctbgszt5gczp3u24iqxx0a';
const _channel = [  'gaules',
                    'gafallen',
                    'Furiatv',
                    'gabepeixe',
                    'mch_AGG'
                 ];
 
const opts = {
  identity: {
    username: _user,
    password: _pass,
  },
 
  channels: 
  [
    'gaules',
    'gafallen',
    'Furiatv',
    'gabepeixe',
    'mch_AGG'
  ]
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