var conn=require("../config/db_connection");
var connection=conn.getConnection();
connection.connect();
var express=require("express");
var router=express.Router();
router.post("/",function (req,res) {
    var pid=req.body.p_id;
    connection.query("delete from products where p_id="+pid,function (err) {
        if (err){
            console.log("Error while deleting data");
        }else {
            console.log({"delete":"success"});
        }

    });
});
module.exports=router;