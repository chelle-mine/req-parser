const fs = require('fs');
const http = require('http');
const path = require('path');

const PORT = process.env.PORT || 3000; 

const server = http.createServer((req, res) => {

    const {headers} = req;

    res.end(JSON.stringify({
        // uncomment for testing
        localaddress: req.socket.localAddress,
        ipaddress: req.socket.remoteAddress,
        language: headers['accept-language'].split(",")[0],
        software: headers['user-agent'].match(/\(([^\)]+)\)/)[1]
    }));

});

server.listen(PORT);
