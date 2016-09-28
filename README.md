# wechat-chat

本项目使用 Gorilla WebSocket (https://github.com/gorilla/websocket) 作为聊天室后台 , Gorilla WebSocket 基于go语言开发，提供的demo实例中有聊天室源码，不需要任何修改就能生成一个聊天室项目(包含后台+web前台)

demo:
http://121.42.51.70:8080(http://121.42.51.70:8080)


一、聊天室服务搭建步骤:   
*如果不想搭建服务器，可以跳过这个步骤，直接使用我的服务*

1. 安装golang (https://golang.org/) , 安装1.6以上版本，低版本问题较多。*注:下载golang需要翻墙*

2. 安装Gorilla WebSocket模块   
   ```go get github.com/gorilla/websocket``` 
     
3. 启动聊天室
```
$ go get github.com/gorilla/websocket    
$ cd `go list -f '{{.Dir}}' github.com/gorilla/   websocket/examples/chat`
$ go run *.go  
```

4. web客户端
访问:http://ip:8080




二、微信小程序客户端

1. git clone https://github.com/ericzyh/wechat-chat.git

2. 使用微信web开发者工具导入项目(https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html)

3. 修改服务地址
   wechat-chat/utils/websockets.js 行1
   
   
三、小程序开发问题 （Q&A）   
Q: 如何通过js获取到某个组件? （发送消息后，清空输入框）   
A: 

Q: text存英文超过屏幕宽度后，会出现横向滚动条?    
A:     

Q: 有没有办法在view里通过js动态加入view？    
A:    

四、todo

1. 发送消息后，清空输入框   
2. 名字可点击，实现1v1通讯
3. 加入聊天间

   
