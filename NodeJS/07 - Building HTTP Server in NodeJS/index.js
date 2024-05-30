const http = require('http');
const fs = require('fs')

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: New Req Received\n`
    console.log("New Req Rec.")
    fs.appendFile("log.txt", log , (err,data)=> {
        res.end("Hello from Server");
    })
    // console.log(req.headers)
    
});


myServer.listen(8000,()=>console.log("Server Started!"))