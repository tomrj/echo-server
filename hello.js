var http = require('http');
var url = require('url');
var port = 4000;

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  var url_parts = url.parse(request.url);
  response.end(url_parts.pathname + '\n');
});

server.listen(port)

console.log('Server running at http://localhost:' + port)
