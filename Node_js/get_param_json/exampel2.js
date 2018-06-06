var express=require('express');
var app=express();
app.get('/login/arg1/arg2',function (req,res) {
    var uname=req.param.arg1;
    var upwd=req.param.arg2;

    if (uname=="admin" && upwd=="admin"){

        res.send("Login Success")
    }
    else {
        res.send("Login Fail")
    }
});
app.listen(8080);
console.log("Sersver listening 8080");