const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
  // request, when called, is returning a promise to request the IP address from
  // the API in JSON format.
};

const fetchCoordsByIP = (body) => {
  return request('https://ipvigilante.com/' + JSON.parse(body).ip);
  // this function is returning a promise to request coordinates from
  // the API in JSON format
};

const fetchISSFlyOverTimes = (body) => {
  return request(`http://api.open-notify.org/iss-pass.json?lat=${JSON.parse(body).data.latitude}&lon=${JSON.parse(body).data.longitude}`);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((data) => {
    const { response } = JSON.parse(data);
    return response;
  });
};


module.exports = {
  nextISSTimesForMyLocation
};