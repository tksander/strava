var request = require('request');

// var getRequest = function(url) {
//   $.getJSON(url, function(data) {
//     console.log(data)
//   });
// }

var activitiesString = 'https://www.strava.com/api/v3/athlete/activities -H "Authorization: Bearer 491eafe37f405331ffc91eef2d04209cbd74f9f5"';

request(activitiesString, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
  }
})