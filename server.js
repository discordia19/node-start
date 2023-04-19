'use strict';

const http = require('http');
const fs = require('fs');

const port = 8000;
const host = 'localhost' 

const RESPONSE_404 = fs.readFileSync('404.html', 'utf-8');

const requestListener = (req, res) => {
    console.log(`${req.url} ${req.method}`);

    let responseText = '';

    if (req.url === '/') {
        responseText  = fs.readFileSync('index.html', 'utf-8');
    } else if (req.url === '/scripts/script.js') {
        responseText  = fs.readFileSync('scripts/script.js', 'utf-8');
    } else if (req.url === '/styles/style.css') {
        responseText  = fs.readFileSync('styles/style.css', 'utf-8');
    } else {
        console.log('why not')
        res.writeHead(404);
        res.end(RESPONSE_404);
    }


    // res.setHeader('Content-type', 'text/html; charset=utf-8');
    res.writeHead(200);
    res.end(responseText);
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('server started');
});
