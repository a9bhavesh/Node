var db=require("./db_properties");
var mysql=require("mysql");
module.exports={
    "getpool":function () {
        return mysql.createPool({
            host:db.host,
            user:db.user,
            password:db.password,
            database:db.database,
            connectionlimit:db.noofconnection
        });
    }
};