//Created by write file fxn

var http = require('http');
var PORT = 3000;
var HOST = '127.0.0.1';
// --> To Remove
var server = http.createServer( (req,res) => {
    console.log('Request was made from url:'+req.url);
    res.writeHead(200,'RES SUCCESS',{'Content-Type': 'text/plain'});
    res.end('Hey...You have successfully called the Page..');

});

server.listen(PORT, HOST);
console.log('Server Started at port 3000');

//One of the most common errors raised when listening is EADDRINUSE. This happens when another server is already 
//listening on the requestedport/path/handle. One way to handle this would be to retry after a certain amount of time:

/*
server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
      console.log('Address in use, retrying...');
      setTimeout(() => {
        server.close();
        server.listen(PORT, HOST);
      }, 1000);
    }
  });
*/