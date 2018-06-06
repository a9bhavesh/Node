var conn=require("../config/db_connection");
var connection=conn.getConnection();
connection.connect();
var express=require("express");
var router=express.Router();
router.post('/',function (req,res) {
    var p_id=req.body.p_id;
    var p_name=req.body.p_name;
    var p_cost=req.body.p_cost;
    connection.query("update products set p_name='"+p_name+"' p_cost="+p_cost+" where p_id="+p_id,function (err,result){
        if (err){
            console.log("error while updating data");
        }else {
            console.log({"update":"success"});
        }

    });
});
module.exports=router;