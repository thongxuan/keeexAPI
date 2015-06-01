var http = require('http');

var server = http.createServer(function(request, response) {
	//localhost:1337/keeex?action=""&username=""&digest=""&path=""
	
    response.writeHead(200, { 'Content-Type': 'text/plain'});
    response.end(request.param('action'));
}).listen(3000, '127.0.0.1');