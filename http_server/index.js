const http = require('http');

const PORT = 3000;

const  server = http.createServer((req,res) =>{
    res.writeHead(200, { //status code 200 = OK
        'Content-Type': 'application/json',
    })

    res.end(JSON.stringify( //string is expected we should use stringify function
        {
            id: 1,
            name: 'Zoltan',
        }
    ));
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); //localhost:3000