var http=require("http");
var url=require("url");
var server=http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/HTML'});
    var obj=url.parse(req.url,true).query;
    var uname=obj.uname;
    var upwd=obj.upwd;

    if(uname=="admin" && upwd=="admin"){
        res.write("Login Success");
    }
    else{
        res.write("Login Fail");
};

 res.end();
});
server.listen(8080);
console.log("Server listeing the port no:8080");