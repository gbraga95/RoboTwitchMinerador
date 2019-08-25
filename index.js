const fs = require("fs");
const _connect = require('./connect.js');

var _user = JSON.parse(fs.readFileSync("./data/users.json"));
var _channels = JSON.parse(fs.readFileSync("./data/channels.json"));

_user.forEach(item => {
    var result = new _connect().sendConnect(item.user, item.pass, _channels);
    console.log(result);
});