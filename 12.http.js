const http = require('http');

// server with 'return' setup, can do with 'else if' statement to (inside comment at line 9)
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage !');
        return;
    } 
    /* else */  if (req.url === '/about') {
        res.end('Here is our short history');
        return;
    }
    res.end(
        `<div>Oops!</div>
        <p>We can't seem to find the page you are looking for...</p>
        <a href='/'>Back to homepage</a>`

    )
});

server.listen(5000);