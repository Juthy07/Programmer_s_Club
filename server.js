const http = require('http');
const PORT = 4000;

const server = http.createServer(function (request, response) {
    response.end("Home Page goes here.");
});

server.listen(PORT);
server.on('listening', function () {
    console.log("Server is up and running on port : ", PORT);
});