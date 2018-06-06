var fs = require("fs");
fs.open("text.txt",function (err,fd) {
    if (err){
        console.log("Error while opening file");
    } else {
        console.log("open Successfully");
    }

    fs.writeFile("text.txt","writeoperation",function (err) {
        if (err){
            console.log("Error while writing");
        } else {
            console.log("write success");
        }

        fs.appendFile("text.txt","Appending",function (err) {
            if (err){
                console.log("Appending err");
            } else {
                console.log("Append Success");
            }

            fs.readFile("text.txt",function (err,data) {
                if (err){
                    console.log("Error while reading");
                } else {
                    console.log(data.toString());
                }

                fs.close(fd,function (err) {
                    if (err){
                        console.log("Error while close");
                    } else {
                        console.log("Close success fully");
                    }

                    fs.unlink("text.txt",function (err) {
                        if (err){
                            console.log("error while delete");
                        } else {
                            console.log("File Removed successfully")
                        }
                    });
                });
            });
        });
    });
});