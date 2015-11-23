/**
 * Created by mcpar on 11/22/2015.
 */

var http = require("http");

http.createServer(function (request, response) {

    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello ACS560!"
    response.end('Hello ACS560!\n');
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');

