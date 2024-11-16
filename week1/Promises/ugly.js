const fs = require("fs");

function asyncFunc(callback){
    fs.readFile("week1/a.txt", "utf-8", function(err,data){
        callback(data);
    });
}

function onData(data){
    console.log(data);
}

asyncFunc(onData);

