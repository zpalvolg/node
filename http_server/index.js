const http = require('http');

const PORT = 3000;

const  server = http.createServer();

server.on('request',(req,res) =>{ //request events

    if (req.url === '/users'){
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        
        res.write(JSON.stringify( //string is expected we should use stringify function
        {
            id: 1,
            name: 'Zoltan',
        }
        ));

        res.end();
    }
    else if(req.url === '/messages'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');

        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Hello World!</h1>');
        res.write('</body>');
        res.write('</html>');

        res.end()
    }
    else{
        res.statusCode = 404; //not found

        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); //localhost:3000