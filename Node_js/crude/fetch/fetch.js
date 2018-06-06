var conn=require("../config/db_connection");
var express=require("express");
var connection=conn.getConnection();
connection.connect();
var router=express.Router();
router.get('/',function (req,res) {
    connection.query("select * from std_details",function (err,recordsArray,fields) {
        if (err){
            console.log("Err While fetching the data");
        }else
        {
            res.send(recordsArray);
        }
    });
});
module.exports=router;
