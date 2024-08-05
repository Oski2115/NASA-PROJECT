const launches = new Map();

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
module.exports = {
    launches,
    getAllLaunches,
}