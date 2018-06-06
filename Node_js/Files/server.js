var fs=require("fs");
var http=require("http");
var server=http.createServer(function (req,res) {
    fs.readFile("E:/Bhavesh Hyderabad/Node_js/Files/sample.json",function (err,data) {
        res.write(data.toString());
        res.end();
    });
});
server.listen(8080);
console.log("server listening the port no 8080");