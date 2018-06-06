var express=require("express");
var app=express();
app.get('/login',function (req,res) {
    var uname=req.param("uname");
    var upwd=req.param("upwd");

    if (uname=="admin" && upwd=="admin"){
        res.send("Login Success");
    }
    else {
        res.send("Login Fail")
    }
});
app.listen(8080);
console.log("server listening the port no 8080");