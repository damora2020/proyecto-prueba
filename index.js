const http = require('http');
const colors = require('colors');

const handleServer = function(require, res){
    
    res.writeHead(200, {'content-type':'text/html'});
    res.write('<h1>Hola mundo</h1>');
    res.end();

}

const server = http.createServer(handleServer);

server.listen(5000, function(){
    console.log('Server on port 5000'.green);
});
