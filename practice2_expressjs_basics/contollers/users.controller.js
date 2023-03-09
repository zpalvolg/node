const model = require('../models/users.model');

function addUser (req,res) {
    
    if (!req.body.name){
        return res.status(400).json(
            {
                error: 'Missing user name!'
            }
        );
    }

    const newUser = {
        name: req.body.name,
        id: model.users.length
    }

    model.users.push(newUser);

    res.json(newUser);
}

function getUserById (req,res) {
    
    const userID = Number(req.params.userId);

    const user = model.users[userID];

    if(user){
        res.status(200).json(user);
    }else {
        res.status(404).json(
            {
                error: 'User does not exist!'
            }
        );
    }
    
}

function getUsers (req,res) {
    res.send(model.users);
}

module.exports = {
    addUser,
    getUserById,
    getUsers
}