const launches = new Map();

const launch = {
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

module.exports = {
    getAllLaunches,
};