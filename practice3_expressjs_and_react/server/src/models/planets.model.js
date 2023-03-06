//built in modules
const fs = require('fs');
const path = require('path');
//3rd party modules
const { parse } = require('csv-parse');

const habitablePlanets = [];

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED' //Exoplanet Archive Disposition
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 //Insolation Flux 
        && planet['koi_prad'] < 1.6; //Planetary Radius
}

function loadPlanetsData() {
    return new Promise((resolve, reject) => {
      fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
        .pipe(parse({
          comment: '#',
          columns: true,
        }))
        .on('data', (data) => {
          if (isHabitablePlanet(data)) {
            habitablePlanets.push(data);
          }
        })
        .on('error', (err) => {
          console.log(err);
          reject(err);
        })
        .on('end', () => {
          console.log(`${habitablePlanets.length} habitable planets found!`);
          resolve();
        });
    });
}

module.exports = {
    loadPlanetsData,
    planets: habitablePlanets,
};