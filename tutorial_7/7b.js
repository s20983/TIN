// Write a nodejs script that:
//1. watches directory supplied as a parameter 
//2. and prints out contents of files that are modified to console. 
//Use https://nodejs.org/api/fs.html to learn about the fs module methods, pay attention to the watch method

var fs = require('fs');
var path = "./7b_testfolder";

fs.watch(path, (eventType, filename) => {
    console.log(eventType + " in " + filenme);
    
    if(eventType === "change") {
        fs.readFile(filename, (err, data) => {
            if (err) throw err;
            console.log(data);
          });
    }

});

