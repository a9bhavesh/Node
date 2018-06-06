var conn=require("../config/db_connection");
var express=require("express");
var connection=conn.getConnection();
connection.connect();
var router=express.Router();
router.get("/",function (req,res) {
    connection.query("select * from products",function (err,recordsArray,fields) {
        if (err){
            console.log("Err while Fetching the data");
        }else{
            res.send("records Array");
        }

    });
});
module.exports=router;