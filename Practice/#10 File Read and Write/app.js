//Module to Read & Write Files
var fs = require('fs');

// fs.readFileSync
// Sync' part allows the node to read the file synchronusly meaning all file is read first before going through other code. 
var sample = fs.readFileSync('sample.txt','utf8');
// utf8 is encoding format
console.log(sample);

// this line of code creates an another file output.js and writes the data in sample into the log.
fs.writeFileSync('output.js', 'Hi you are now writing this file -> ' + sample);
