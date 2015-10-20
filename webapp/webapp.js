var http = require('http');
var url = require('url');
var show = require('./show')

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(req, res) {
  var pathName = url.parse(req.url).pathname;
  console.log(pathName);
  show.showPage(res, pathName);
}
