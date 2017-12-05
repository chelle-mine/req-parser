const fs = require('fs');
const http = require('http');
const path = require('path');

const PORT = process.env.PORT || 3000; 

const server = http.createServer((req, res) => {

    const {headers} = req;

    res.end(JSON.stringify({
        // uncomment for testing
        // localaddress: req.connection.localAddress,
        ipaddress: req.connection.remoteAddress,
        language: headers['accept-language'].split(",")[0],
        software: headers['user-agent'].match(/\(([^\)]+)\)/)[1]
    }));

});

server.listen(PORT);
