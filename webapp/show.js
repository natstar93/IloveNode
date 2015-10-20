var content = require('./content');

function showPage(res, pathName) {
  if(content.contentMap[pathName]) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(content.contentMap[pathName]);
    res.end();
  }else {
    res.writeHead(404, {'Content-Type' : 'text/html'});
    res.write('<h1>404 page not found</h1>');
    res.end();
  }
}

exports.showPage = showPage;
