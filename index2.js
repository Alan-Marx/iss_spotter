const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((flyTimes) => {
    for (let time of flyTimes) {
      let date = new Date (time.risetime * 1000);
      console.log(`Next pass at ${date} for ${time.duration} seconds!`)
    }
  })
  .catch((error) => {
    console.log('It didn\'t work: ', error.message);
  });