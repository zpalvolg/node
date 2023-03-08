const launches = new Map();

let latestFlightNumber = 100;

const launch = 
{
    flightNumber: 100,
    mission: 'Kepler X',
    rocket: 'Explore IS1',
    launchDate: new Date('December 30, 2030'),
    target: 'Kepler-442 b',
    customers: ['ZTM','NASA'],
    upcoming: true,
    success: true
};

launches.set(launch.flightNumber, launch);

//data access layer
function getAllLaunches(){
    return Array.from(launches.values());
}

function addNewLaunch(p_launch) {
    //increase latest flight number
    latestFlightNumber++;
    // add new launch to launches and populate some attributes by default
    launches.set(
        latestFlightNumber,
        Object.assign(p_launch, {
          success: true,
          upcoming: true,
          customers: ['Zero to Mastery', 'NASA'],
          flightNumber: latestFlightNumber,
        })
      );
};

module.exports = {
    getAllLaunches,
    addNewLaunch,
};