const express = require('express');
const usersController = require('./contollers/users.controller');

const PORT = 3000;

const server = express();

server.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta =  Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});


//add middleware function to parse incoming requests with JSON payloads
server.use(express.json());

server.post('/users', usersController.addUser);
server.get('/users', usersController.getUsers);
server.get('/users/:userId', usersController.getUserById);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); //localhost:3000