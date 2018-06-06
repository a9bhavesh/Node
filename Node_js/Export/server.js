var http = require("http");
var server = http.CreateServer(function (req,res) {
   res.writeHead(200,{'Content-Type':'text/html'});

var db=require("db_properties");
console.log(db.user);
console.log(db.password);
console.log(db.host);
console.log(db.database);
console.log(db.no_of_connection);
console.log(db.tokenpassword);
    res.end();

});
server.listen(8080);
console.log("sunn rha hu me 8080 ");