// Why we need a server

// NodeJs Use Cases
// A system to interact with the db
// A system to interact with files on a machine
// A system to process jobs

// Imports
var http = require('http');
const url = require('url');

const hostname = '127.0.0.1'
const port = 8080;

// Create the server
const server = http.createServer(function (req, res) {
    // Request Method
    const method = req.method;

    // Request URL
    const reqUrl = req.url;

    // Headers
    const headers = req.headers;

    // Get the url and parse the url
    const parsedUrl = url.parse(reqUrl);

    // Query Parameters
    const parameters = parsedUrl.query;

    // Body / Payload
    let data = '';
    req.on('data', (chunk) => {
        data = data + chunk;
    });
    req.on('end', () => {
        // console.log('Url', url);
        console.log('Method', method);
        console.log('Parameters', parameters);
        console.log('Headers', headers);
        console.log('Body', data)

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Hello World');
    });
});

server.listen(port, hostname, () => {
    console.log(`There is a server running on http://${hostname}:${port}`);
});