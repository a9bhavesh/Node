var express=require('express');
var app=express();
var mymiddleware=require('./middlimport');
app.use(mymiddleware({uname:"admin",upwd:"admin"}));
app.get('/sample',function(req,res){
    res.send("login succuess");
});
app.listen(8080);
console.log("sersver listening port no:8080");