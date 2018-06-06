var conn=require("../config/db_connection");
var express=require('express');
var connection=conn.getConnection();
connection.connect();
var router=express.Router();
router.post('/',function (req,res) {
    var sid=req.body.s_id;
    connection.query("delete from std_details where s_id="+sid,function (err) {
        if (err){
            console.log("Error while deleting data");
        }else {
            console.log({"delete":"success"});
        }
    });
});
module.exports=router;