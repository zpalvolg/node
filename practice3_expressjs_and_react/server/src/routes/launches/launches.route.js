const express = require('express');
const {getAllLaunches, addNewLaunch, abortLaunch} = require('../launches/launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/launches', getAllLaunches);

launchesRouter.post('/launches', addNewLaunch);

launchesRouter.delete('/launches/:id', abortLaunch);

module.exports = launchesRouter;