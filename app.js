var express = require('express');
var app = express();
var db = require('./config/db');
var bodyParser = require('body-parser');

app.disable('x-powered-by');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var api = {};
// api.transmitter = require('./modules/transmitter/routes');
api.devices = require('./modules/device/routes');
api.environments = require('./modules/environment/routes');

// app.use('/api/transmitter', api.transmitter);
app.use('/api/devices', api.devices);
app.use('/api/environments', api.environments);

module.exports = app;