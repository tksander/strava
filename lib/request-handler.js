var request = require('request');
var jquery = require('jQuery');

var string = 'https://www.strava.com/api/v3/athlete/activities -H "Authorization: Bearer 491eafe37f405331ffc91eef2d04209cbd74f9f5"'

exports.getRequest = function(url) {
  jquery.getJSON(url, function(data) {
    console.log(data)
  });
};

// $.ajax({
//   dataType: "json",
//   url: url,
//   data: data,
//   success: success
// });


// exports.getRequest = function(string) {
//   request('https://www.strava.com/api/v3/athlete/activities -H "Authorization: Bearer 491eafe37f405331ffc91eef2d04209cbd74f9f5"', function (error, response, body) {
//     console.log("inside request");
//     if (!error && response.statusCode == 200) {
//       console.log(body) 
//     }
//     // console.log(response);
//     console.log(body);
//   })
// };
