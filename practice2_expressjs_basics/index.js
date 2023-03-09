const express = require('express');

const {userRouter} = require('./routes/users.route')

const PORT = 3000;

const server = express();

server.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta =  Date.now() - start;
    console.log(`${req.method}  ${req.baseUrl}${req.url} ${delta}ms`);
});

//add middleware function to parse incoming requests with JSON payloads
server.use(express.json());

server.use('/users',userRouter);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); //localhost:3000