const ws = require("nodejs-websocket");
let webSocket = ws.createServer(function (clinet) {
    console.log("new client connect")
    clinet.on("text",(result)=>{
        console.log("receive message",result)
       clinet.send("ok nihao")
    });
    clinet.on("close",(result)=>{
        console.log("on close",result)
    });
    clinet.on("error",(result)=>{
        console.log("on error",result)
    });
});
webSocket.listen(3000);
