/*
 * smarthome-api server
 *
 * */

// Set up Express.js
var express = require('express');
var app = express();

// Load libraries
var bodyParser = require('body-parser');

// Set up body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up static content 
app.use(express.static(__dirname + '/public')); // HTML, CSS

// Set up app routes
require('./config/routes')(app);

exports = module.exports = app;
if (!module.parent) {
  var port = process.env.PORT || 8080; // 8080 as default
  // On Linux make sure you have root to open port 80
  app.listen(port, function() {
    console.log('Listening on port ' + port);
  });
}
