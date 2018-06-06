var express=require('express');
var app=express();
var myfun=function (req,res,next) {
    console.log("Hello");
    next();
};
app.use(myfun);
app.get('/sample',function (req,res) {
    res.send("message: Welcome");
});
app.listen(8080);
console.log("Server listening the port no 8080");