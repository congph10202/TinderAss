 var http = require('http');
 var fs = require('fs');

http.createServer(function (request, response){
    response.writeHead('200',{'Content-Type':'text/html'});

    fs.readFile('index.html',function (error,data){
        if(error != null){
                response.end(error);
        }else {
            response.write(data);
            response.end();
        }
    })
}).listen(8080);