var http=require("http");
var server=http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Welcome to Node js</h1>");
    res.end();    
});
server.listen(8080);
console.log("Server Listening the port no.8080");