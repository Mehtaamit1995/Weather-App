const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=30f86cd24d1df50834a081fca09f09c4&query=" +
    latitude +
    "," +
    longitude +
    "&unit=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to weather services!", undefined);
    } else if (body.error) {
      console.log(`error is ${JSON.stringify(response.body.error)}`);
      callback("unable to find the Location!", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out"
      );
    }
  });
};

module.exports = forecast;
