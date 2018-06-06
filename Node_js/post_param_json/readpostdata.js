//var import express
var express=require("express");

//import bodyparser
var bodyparser=require("body-parser");

//create Rest Object
var app=express();

//Set the mime type json from front side data
app.use(bodyparser.json());

//if front end send form Data
app.use(bodyparser.urlencoded("extended",true));
//true stands for receiving form data
//false stand for not receiving form data

//creat rest api
app.post('/login',function (req,res) {
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    if (uname=="admin" && upwd=="admin"){
        res.send({"Login":"success"});
    }
    else {
        res.send({"Login":"Fail"});
    }
    });
app.listen(8080);
console.log("servr listen the port no 8080");