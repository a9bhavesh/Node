var my_pool=require("./config/db_connection");
var express=require("express");
var bodyparser=require("body-parser");
var g_token=require("./auth/generattoken");
var app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded("extender",false));
app.post("/login",function (req,res) {
    var u_name=req.body.uname;
    var u_pwd=req.body.upwd;

    var pool=my_pool.getpool();
    pool.getConnection(function (err,connection) {
        connection.query("select * from login_details where uname='"+u_name+"' upwd='"+u_pwd+"'",function (err,recordsArray,fields) {
                                if (recordsArray>0){
                                    var token=g_token(uname,upwd,'password');
                                    db.token=token;
                                    res.send({"login":"success"});
                                }else {
                                    res.send({"login":"fail"});
                                }
        });
    });
});
app.listen(8080);
console.log("server listen success fully");
