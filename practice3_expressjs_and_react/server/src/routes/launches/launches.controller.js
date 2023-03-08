const launchesModel= require('../../models/launches.model');

function getAllLaunches(req, res) {
    return res.status(200).json(launchesModel.getAllLaunches());
}

function addNewLaunch(req, res){
    const launch = req.body;

    //convert strin from JSON to date
    launch.launchDate = new Date(launch.launchDate);

    launchesModel.addNewLaunch(launch);

    //201 = created
    return res.status(201).json(launch);
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
};