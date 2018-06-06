var express=require('express');
var app=express();
var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({"extender":false}));

var fetch=require('./fetch/fetch');
app.use("/fetch",fetch);

var insert=require('./insert/insert');
app.use("/insert",insert);

var update=require('./update/update');
app.use("/update",update);

var remove=require('./delete/delete');
app.use("/delete",remove);

app.listen(8080);
console.log("server listening the success 8080");
