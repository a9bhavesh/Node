var db=require("./db_properties");
var mysql=require("mysql");
module.exports={
    "getConnection":function () {
        return mysql.createConnection({
            "host":db.host,
            "user":db.user,
            "password":db.password,
            "database":db.database
        });
    }
};