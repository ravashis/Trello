const http=require("http");

const hostName="127.0.0.1";

const port=5000;
//for heroku use process.app.env || 8080

http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("We are live");
}).listen(port,hostName,()=>{
    console.log(`Server is up at http://${hostName}:${port}`);
});