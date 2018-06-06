var express=require("express");
var app=express();
var myfun=function(req,res,next){
    req.setTime=new Date().toLocaleTimeString();
    next();
};
app.use(myfun);
app.get("/sample",function(req,res){
    res.send(req.setTime);
});
app.listen(8080);
console.log("server listening the port 8080");