const http = require('http');

const app = require ('./app'); 

const { loadPlanetsData } = require('./models/planets.model');

//const PORT = process.env || 8000;
const PORT =  8000;

const a = process.env;
const server = http.createServer(app);

async function startServer() {
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}...`);
    });
}

startServer();
  