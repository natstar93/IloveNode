var http = require('http');
var url = require('url');

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(req, res) {
  var pathName = url.parse(req.url).pathname;
  console.log(pathName);
  showPage(res, pathName);
}

function showPage(res, pathName) {
  if(contentMap[pathName]) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(contentMap[pathName]);
    res.end();
  }else {
    res.writeHead(404, {'Content-Type' : 'text/html'});
    res.write('404 page not found');
    res.end();
  }
}

var contentMap = {
  '/' : '<h1>Main Page</h1>',
  '/contact' : '<h1>Contact</h1>',
  '/about' : '<h1>About</h1>'
}
