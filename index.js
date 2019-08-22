var tmi = require('tmj.js');
var userTwitch = "";
var channelTwitch = "";

var options = {
    option:{
        debug: true
    },
    connection: {
        cluster: 'aws',
        reconnect: true
    },
    identity: {
        usernanme: userTwitch,
        password: "OAUTH"
    },
    channel: [channelTwitch]
};

var _client = new tmi.client(options);

_client.connection();

_client.on("chat", function(channel, user, message, self){
    if (message === "!fb"){
        _client.action(channelTwitch, "http://fb.com/dukebr")
    }

    if (message.toUpperCase() === "OLÁ"){
        _client.action(channelTwitch, "http://fb.com/dukebr")
    }
});

