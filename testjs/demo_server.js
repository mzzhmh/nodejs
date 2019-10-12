var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome Node.js');
}).listen(3001, "192.168.1.106");
console.log('Server running at http://192.168.1.106:3001/');

