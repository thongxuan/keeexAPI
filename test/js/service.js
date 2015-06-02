var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    
	//parse url and respond base on action
	var query = url.parse(request.url, true).query;
	var action = query.action;
	var path = query.path;
	
	response.writeHead(200);
	if (action=="keeexit")
	{
		if (path && fs.existsSync(path))
		{
			response.writeHead(200);
			/*TODO
			return the path to the keeexed file or its content
			*/
			response.write("This must be path to the keeexed file");
		}
		else
		{
			//return bad request
			response.writeHead(400);
			response.write("bad argument for keeex");
		}
	}
	else if (action=="verify")
	{
		if (path && fs.existsSync(path))
		{			
			response.writeHead(200);
			/*TODO
			return whether the file is in the lastest version
			*/
			response.write("This must be true or false");
		}
		else
		{
			//return bad request
			response.writeHead(400);
			response.write("bad argument for verify");
		}
	}
	else
	{
		//action not supported		
		response.writeHead(404);
		response.write("action not supported");
	}
	response.end();
	
}).listen(3000, '127.0.0.1');

