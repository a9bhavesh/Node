var fs=require('fs');
fs.appendFile('text.txt',"Hello",function (err) {
    if (err){
        console.log("Error while appending");
    } else {
        console.log("Data Append success fully");
    }
});