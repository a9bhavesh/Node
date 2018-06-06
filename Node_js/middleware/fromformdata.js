var express = require("express");
var app = express();
var myMiddleware = function(req,res,next){
    var uname = req.param("uname");
    var upwd = req.param("upwd");
    if(uname == "admin" && upwd == "admin"){
        next();
    }else{
        res.send("<h1>UnAuthorized User !</h1>");
    }
};
app.use(myMiddleware);
app.get("/sample",function(req,res){
    res.send("<h1>data from db soon...!</h1>");
});
app.listen(8080);
console.log("Server Listening the port no.8080");
