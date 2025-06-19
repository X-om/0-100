const fs = require("fs");
const path  = require("path");
const express = require("express");



const folderPath = "/Users/om/Desktop/Desktop Files/0-100/week2/HTTP/files";

function displayFiles(){
    return new Promise(function(res,rej){
        fs.readdir(folderPath,function(err,files){
            if(err){
                rej("could not read the folder !");
            } else{     
                if(files.length > 0){
                    const fileList = [];
                    for(let i = 0; i < files.length; i++){
                        const file = files[i];
                        const filePath = path.join(folderPath,file);
                        if(fs.lstatSync(filePath).isFile()){
                           fileList.push(file);
                        }
                    }
                    res(fileList);
                } 
                else{
                    res("folder is empty");
                }
            }       
        }) 
    }) 
}

function displayContent(fileName){
    return new Promise(function(resolve , reject){
        fs.readdir(folderPath,function(err,files){
            if(err){
                reject(err);
            } else{
                    if(files.includes(fileName)){
                        const filePath = path.join(folderPath,fileName);
                        fs.readFile(filePath,"utf-8",(error,data)  =>{
                            if(error){
                                reject(error);
                            } else{
                                resolve(data);
                            }
                        })
                    } else{
                        resolve("File does not exist !");
                    }
                }
        })
    })
}

const app = express();

app.get("/files" , (req,res)=>{
    const ans = displayFiles();
    ans.then(function(values){
        const result = values.join(" ");
        res.send(result);
    })
});

app.get("/files/:fileName",function(req,res){
    const name = req.params.fileName;
    console.log(name)
    let result;
    displayContent(name).then(function(value){
        // res.send(typeof(value));
        if(value.length > 0){
            result = value;
        } else{
            result = "File is empty !";
        } 
        res.send(result); 
    })
        
})


app.listen(3000);




