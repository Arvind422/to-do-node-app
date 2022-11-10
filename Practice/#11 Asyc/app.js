var fs = require('fs');

var file = fs.readFile('input.txt','utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile('writeme.txt',data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    console.log('INSIDE INPUT.txt --> ',data);
  });

console.log('This is an instruction outside the sync file system.');


// var file = fs.readFile('input.txt','utf8',function(err,data){
//     fs.writeFile('writeme.txt',data);
//     console.log(data);
// });

// --> To Remove

// fs.rmdir('#12 Direct', ()=>{
//     console.log('REMOVED!!');
// });



// -- > below is to create directories and the create a file in them.

var path = 'C:/Users/Lenovo/Desktop/Node Course/code-ninja-course/to-do-node-app/Practice/#12 Direct' ;

// Next, we set recursive on true, so we can create nested directories right away, otherwise, we will get errors that a parent dir does not exist yet.
fs.mkdir(path , {recursive : true} ,(err,data) => {
//fs.mkdir(process.cwd() + '/Practice/#12 Direct', {recursive : true} ,(err,data) => {
// The first one will be process.cwd(). This is your whole path to your current directory, plus our new custom path which we pass as an argument in the createDir function.    
    fs.writeFile(path + '/app.js', '//Created by write file fxn', () => {
        console.log('Done!!');
    });

    console.log('mk dir Done!!',process.cwd() + '/Practice/#12 Direct');
});