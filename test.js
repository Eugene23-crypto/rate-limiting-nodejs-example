const http = require('http');
const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit')

// Limit for all requests for the app
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes 
    max: 10, // The limit for each IP address per windowMs
    message: "<h2>Many requests from your address, try after a minute.</h2>"
})

// Apply to all requests
app.use(limiter)
app.get('/', limiter, (req, res, next) => res.send('<h1>Hello</h1>'))

// Limit for a specific request for the app
const createAccountlimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes 
    max: 3, // The limit for each IP address per windowMs
    message: "<h3>Many account creation requests from this IP, please try again after a minute.</h3>"
})

// Apply to the account creation request
app.get('/create-account', createAccountlimiter, (req, res, next) => {
    res.send('<h1>Create Account page</h1>')
})

//To verify the port, our server is running
const normalizePort = val => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

//To hande errors which can happen for our server address
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ?
        'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};
const port = normalizePort(process.env.PORT || '9000');
app.set('port', port);
const server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});
server.listen(port);