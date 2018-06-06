var my_fun=require("./fun_two");
var http=require("http");
var server = http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
var obj = my_fun();

    console.log(obj.mysql_conn());
    console.log(obj.mongodb_conn());
    console.log(obj.ORM_conn());
    res.end();
});
server.listen(8080);
console.log("Server Listening the port no 8080");