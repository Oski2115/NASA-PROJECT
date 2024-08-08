const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 25, 2030'),
    destination: 'Kepler-442 b',
    customer: ['NASA', 'Slime'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(launch.latestFlightNumber, Object.assign(launch, {
        flightNumber : latestFlightNumber,
        customer: ['NASA', 'Slime'],
        upcoming: true,
        success: true,
    }));

}

module.exports = {
    getAllLaunches,
    addNewLaunch,
}