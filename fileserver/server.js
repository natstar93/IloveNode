var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

http.createServer(function(request, response) {

  pathName = url.parse(request.url).pathname;
  console.log(pathName);
  fs.readFile(__dirname + pathName, function(err, data) {
    if(err) {
      response.writeHead(404, {'Content-Type':'text/plain'});
      response.write('Page not found' + JSON.stringify(err));
      response.end();
    }
    else {
      response.writeHead(200);
      response.write(data);
      response.end();
    }
  });

}).listen(7000);
