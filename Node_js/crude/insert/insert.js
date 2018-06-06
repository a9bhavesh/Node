var conn=require("../config/db_connection");
var express=require('express');
var connection=conn.getConnection();
connection.connect();
var router=express.Router();
router.post("/",function (req,res) {
    var sid=req.body.s_id;
    var sname=req.body.s_name;
    var saddress=req.body.s_add;
    connection.query("insert into std_details values("+sid+",'"+sname+"','"+saddress+"')",
                                                    function (err,result) {
                        if (err){
                            console.log("error while inserting the data");
                        }else {
                            res.send("Record Successfully");
                        }
    });
});
module.exports=router;
