const fs = require('fs');
const http = require('http');
const path = require('path');

const PORT = process.env.PORT || 3000; 

const server = http.createServer((req, res) => {

    const {headers} = req;

    res.end(JSON.stringify({
        // uncomment for testing
        // localaddress: req.socket.localAddress,
        ipaddress: req.socket.remoteAddress,
        language: headers['accept-language'].split(",")[0],
        // assuming usual string format, 
        // e.g., "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0"
        //    or "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
        software: headers['user-agent'].match(/\(([^\)]+)\)/)[1]
    }));

});

server.listen(PORT);
