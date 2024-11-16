const fs = require("fs");
// file system module

fs.readFile("week1/a.txt", "utf-8", function(err,data){
    console.log(data);
});

