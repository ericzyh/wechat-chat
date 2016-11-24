//index.js

var websocket = require('../../utils/websocket.js');


//获取应用实例
var app = getApp()
    
var message = '';

var text = '';

var user = {};

var msg = ' ';
Page({
  data: {
    message : '',
    text : text,
    msg : '',
  },
  bindChange: function(e) {
        message = e.detail.value
        
  },
  //事件处理函数
  add: function(e) {
    var that = this;
    websocket.send(user.nickName +" : "+ message);
    message = ' ';
    that.setData({
      msg: ' ',
    });
  },
  
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      user = userInfo;
      websocket.connect(user, function(res) {
        text = res.data +"\n" + text;
        that.setData({
          text:text,
          msg:'\0',
        });
      })
    })
  }
})
