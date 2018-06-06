var http=require("http");
var qs=require("querystring");
var server=http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    var body="";
    req.on("data",function(data){
        body+=data;
    });
    req.on("end",function(){
        var obj=qs.parse(body);
        var uname=obj.uname;
        var upwd=obj.upwd;

        if(uname=="Admin" && upwd=="Admin"){
            res.write("<h1>Login Success</h1>");
        }
        else{
            res.write("<h1>Login Failes</h1>");
        }
        res.end();
    });
});
server.listen(8080);
console.log("server listening the port no:8080");