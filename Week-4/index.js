// Why we need a server

// NodeJs Use Cases
// A system to interact with the db
// A system to interact with files on a machine
// A system to process jobs

// Imports
var http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');

const hostname = '127.0.0.1'
const port = 8080;

// Handlers
const handlers = {};

handlers.homeHandler = (data, callback) => {
    callback(200, data);
};

// TODO: Return an actual HTML file
// TODO: Deploy our application -> Heroku
handlers.notFound = (data, callback) => {
    callback(404, 'The data you requested in unavailable');
};

handlers.login = (data, callback) => {
    callback(400, { message: 'This will be implemented soon' });
};

// Router
const router = {
    home: handlers.homeHandler,
    login: handlers.login,
}

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

    // Path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Query Parameters
    const parameters = parsedUrl.query;

    // Body / Payload
    const decoder = new StringDecoder('utf-8')
    let data = '';
    req.on('data', (chunk) => {
        data += decoder.write(chunk);
    });
    req.on('end', () => {
        data += decoder.end();

        // Handle routing -> Checking if trimmedPath exists as a key in the router object
        const routeHandler = typeof (router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

        // if (typeof(routeHandler) !== 'undefined') {
        //     routeHandler[trimmedPath];
        // } else {
        //     routeHandler = handlers.notFound;
        // }

        const payload = {
            method: method,
            headers: headers,
            body: data,
            path: trimmedPath,
            query: parameters,
        };

        routeHandler(payload, (statusCode, payloadData) => {
            const payloadString = JSON.stringify(payloadData);

            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
        });


        console.log('Payload', payload);
    });
});

server.listen(port, hostname, () => {
    console.log(`There is a server running on http://${hostname}:${port}`);
});