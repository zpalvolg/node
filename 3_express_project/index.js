const express = require('express');

const PORT = 3000;

const server = express();

server.get('/',(req,res) => {
    res.send('Hellow World!');
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); //localhost:3000