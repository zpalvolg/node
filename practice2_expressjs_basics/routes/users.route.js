const express = require('express');
const usersController = require('../contollers/users.controller');

const userRouter = express.Router();


userRouter.use((req,res,next)=>{
    console.log('calling userRouter..');
    next();
});

userRouter.post('/', usersController.addUser);
userRouter.get('/', usersController.getUsers);
userRouter.get('/:userId', usersController.getUserById);

module.exports = {
    userRouter,
}