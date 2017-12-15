var http = require('http');
var fs = require('fs');
 var path = require('path')


var server = http.createServer(function(req,res) {
  console.log('request was made: ' + req.url);


// code to display each page through node js


  if (req.url === '/login' || req.url === '/' ){
    res.writeHead(200, {'content-type': 'text/html'});
    fs.createReadStream(__dirname + '/login.html').pipe(res);
  } else if (req.url === '/register') {
    res.writeHead(200, {'content-type': 'text/html'});
    fs.createReadStream(__dirname + '/register.html').pipe(res);
  } else if (req.url === '/lists.html') {
    res.writeHead(200, {'content-type': 'text/html'});
    fs.createReadStream(__dirname + '/register.html').pipe(res);
  } else if (req.url === '/Quiz.html') {
    res.writeHead(200, {'content-type': 'text/html'});
    fs.createReadStream(__dirname + '/Quiz.html').pipe(res);
  }else{
    res.writeHead(404, {'content-type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});



server.listen(3000, '127.0.0.1');

console.log('running port 3000');
