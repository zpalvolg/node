const http = require('http');

const PORT = 3000;

const  server = http.createServer((req,res) =>{
    res.writeHead(200, { //status code 200 = OK
        'Content-Type': 'text/plain',
    })

    res.end('Hello World!');
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); //localhost:3000