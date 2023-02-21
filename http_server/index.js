const http = require('http');

const PORT = 3000;

const  server = http.createServer();

const users = [
    {
        id: 0,
        name: 'Attila',
    },
    {
        id: 1,
        name: 'Zoltan',
    },
    {
        id: 2,
        name: 'Laszlo',
    }

]

server.on('request',(req,res) =>{ //request events

    const urlItems = req.url.split('/');
    // /users/1 -> ['','users','1']

    if (urlItems[1] === 'users'){
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        
        const userIndex = Number(urlItems[2]);
        //string is expected we should use stringify function
        if (urlItems.length === 3){
            res.write(JSON.stringify(users[userIndex]));
        }        
        else {
            res.write(JSON.stringify(users));
        }

        res.end();
    }
    else if(urlItems[1] === 'messages'){
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