//import express module
var express=require("express");

//import body parser
var bodyparser=require("body-parser");

//creat the rest object
var app=express();

//create the json as the mime type
//front end send email & pwd
app.use(bodyparser.json());

//if front end not sending data
app.use(bodyparser({"extended":false}));

//create the Rest Api

app.post("/login",function (req,res) {
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    if (uname=="admin" && upwd=="admin"){
        res.send({"login":"success"});
    }
    else {
        res.send({"login":"fail"})
    }
    });

//Assign the Port No
app.listen(8080);
console.log("server listening the port no.8080");