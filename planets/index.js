const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED' //Exoplanet Archive Disposition
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 //Insolation Flux 
        && planet['koi_prad'] < 1.6; //Planetary Radius
}

fs.createReadStream('kepler_data.csv')
  .pipe(parse({ //pipe createReadStream to parse as readable.pipe(writeable)
    comment: '#', //specify comments lines in csv file
    columns: true //each row will return as a js object
  }))
  .on('data',(data) => { //.on(event,callback function)
    if(isHabitablePlanet(data)){
        results.push(data);
    }
  })
  .on('error',(err) => {
    console.log(err);
  })
  .on('end',() => {
    console.log(`${results.length} habitable planets found!`);
  });