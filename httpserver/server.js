var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.write('Hello Node JS Server Response');
  response.end();

  pathName = url.parse(request.url).pathname;
  query = url.parse(request.url).query;
  queryx = querystring.parse(query).access;

  console.log('pathName: ' + pathName);
  console.log('query: ' + query);
  console.log('queryx: ' + queryx);

  console.log(request);
}).listen(7000);
