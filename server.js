const http=require("http");
const url=require("url");
const path=require("path");
const fs=require("fs");

const mimeTypes={
    html:"text/html",
    css: "text/css",
    js:"text/javascript",
    png:"image/png",
    jpeg:"image/jpeg",
    jpg:"image/jpg"
};

const hostName="127.0.0.1";

const port=5000;
//for heroku use process.app.env || 8080

http.createServer((req,res) => {
    /*
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("We are live");
}).listen(port,hostName,()=>{
    console.log(`Server is up at http://${hostName}:${port}`);*/
    let myuri=url.parse(req.url).pathname;
    let fileName=path.join(process.cwd(),unescape(myuri));

    console.log(`The file being looked for is ${fileName}`);
    var loadFile;

    try
    {
        loadFile=fs.lstatSync(fileName);
    }
    catch(error){
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.write("404 Page not found");
        res.end();
        return;
    }

    if(loadFile.isFile())
    {
        let mimeType=mimeTypes[path.extname(fileName).split(".").reverse()[0]];
        res.writeHead(200,{"Content-Type": mimeType});
        let fileStream=fs.createReadStream(fileName);
        fileStream.pipe(res);
    }
    else if(loadFile.isDirectory())
    {
        res.writeHead(302,{"Location": "index.html"});
        res.end();
    }
    else
        res.writeHead(500,{"Content-Type":"text/plain"}).write("500 Internal Error").end();

}).listen(port,hostName,()=>{
    console.log(`Server running at http://${hostName}:${port}`);
});