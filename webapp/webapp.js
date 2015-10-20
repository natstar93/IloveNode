var http = require('http');
var url = require('url');

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(req, res) {
  var pathName = url.parse(req.url).pathname;
  console.log(pathName);
  res.writeHead(200);
  res.write('Hello world');
  res.end();
}
