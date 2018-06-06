var express=require("express");
var app=express();
app.get("/",function (req,res) {
    res.send("Welcome to Maintain module");
});

var login=require("./Login/login");
app.use("/Login",login);

var register=require("./Register/register");
app.use("/Register",register);

app.listen(8080);
console.log("server listening the port no 8080");