module.exports=function(login){
    return function(req,res,next){
        if(login.uname==="admin" && login.upwd==="admin"){
            next();
        }
        else{
            res.send("unauthorized user");
        }
    }
};