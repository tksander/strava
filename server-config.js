var express = require('express');
var handler = require('./lib/request-handler.js');


var app = express();

var string = 'https://www.strava.com/api/v3/athlete/activities -H "Authorization: Bearer 491eafe37f405331ffc91eef2d04209cbd74f9f5"'

// Setup routes for API
app.get('/', function(req, res) {
  res.send("running get");
  handler.getRequest(string);
});

module.exports = app