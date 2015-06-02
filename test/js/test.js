var http = require('http');

function getStatusCode(request, callback) {
    var options = {
        host: "127.0.0.1",
        port: 3000,
        path: request,
    };
    http.get(options, function(response) {
        callback(response.statusCode);
    });
}

function proceedReturnCode(code)
{
	switch (code)
	{
		case 200:
			//request success
			break;
		case 400:
			//bad param
			break;
		case 404:
			//action not found
			break;		
	}
	console.log(code);
}

var action = "keeexit";
var path = "E:\\test\\image.bmp";
getStatusCode("/keeex?action="+action+"&path="+path, proceedReturnCode);