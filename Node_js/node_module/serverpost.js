var express= require("express");
var app=express();

app.post("/",function (req,res) {
    res.send("welcome to post req");
});
app.post("/postrequest",function (req,res) {
    res.send("Welcome post req");
});
app.listen(8080);
console.log("server port no:8080");