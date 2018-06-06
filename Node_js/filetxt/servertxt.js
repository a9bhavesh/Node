var fs=require("fs");
fs.writeFile("text.txt","HIIii..!",function (err) {
    if (err){
        console.log("Error while Writing")
    }else {
        console.log("Data write Success");
    }
});
