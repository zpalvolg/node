const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

fs.createReadStream('kepler_data.csv')
  .pipe(parse({ //pipe createReadStream to parse as readable.pipe(writeable)
    comment: '#', //specify comments lines in csv file
    columns: true //each row will return as a js object
  }))
  .on('data',(data) => { //.on(event,callback function)
    results.push(data);
  })
  .on('error',(err) => {
    console.log(err);
  })
  .on('end',() => {
    console.log(results);
    console.log('done');
  });