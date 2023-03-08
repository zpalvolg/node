const launchesModel= require('../../models/launches.model');

function getAllLaunches(req, res) {
    return res.status(200).json(launchesModel.getAllLaunches());
}

function addNewLaunch(req, res){
    const launch = req.body;

    // validation: Missing required property
    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
        //400 = bad request
        return res.status(400).json({
            error: 'Missing required property!'
        });
    }

    //convert strin from JSON to date
    launch.launchDate = new Date(launch.launchDate);

    // validation: Invalid launch date
    if(isNaN(launch.launchDate)){
        //400 = bad request
        return res.status(400).json({
            error: 'Invalid launch date!'
        });
    }

    launchesModel.addNewLaunch(launch);

    //201 = created
    return res.status(201).json(launch);
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
};