var conn=require("../config/db_connection");
var express=require('express');
var connection=conn.getConnection();
connection.connect();
var router=express.Router();
router.post('/',function (req,res) {
    var sid = req.body.s_id;
    var sname = req.body.s_name;
    var saddress = req.body.s_add;
    connection.query("update std_details set s_name='" + sname + "', s_add='"+saddress+"' where s_id="+sid+" ",function (err,result) {
        if (err) {
            console.log("Error while updating data");
        } else {
            console.log({"update": "success"});
        }
    });
});
module.exports=router;