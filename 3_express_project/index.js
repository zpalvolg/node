const express = require('express');

const PORT = 3000;

const server = express();

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

server.get('/',(req,res) => {
    res.send('Hellow World!');
});

server.get('/users',(req,res) => {
    res.send(users);
});

server.get('/users/:userId',(req,res) => {
    
    const userID = Number(req.params.userId);

    const user = users[userID];

    if(user){
        res.status(200).json(user);
    }else {
        res.status(404).json(
            {
                error: "User does not exist!"
            }
        );
    }
    
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); //localhost:3000