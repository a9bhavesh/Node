var express=require("express");
var app=express();
app.get("/",function (req,res) {
    res.send("Welcome to first get rest");
});
app.get("/getrequest",function (req,res) {
    res.send("Welcome another get request");
});
app.listen(8080);
console.log("server listen 8080");