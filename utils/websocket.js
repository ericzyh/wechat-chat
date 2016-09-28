var url = 'ws://121.42.51.70:8080/ws';

function connect (func) {

  wx.connectSocket({
    url: url
  });

  wx.onSocketMessage(func);
}


function send (msg) {
  wx.sendSocketMessage({data:msg});
}
module.exports = {
  connect: connect,
  send : send
}
