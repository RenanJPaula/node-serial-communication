var express = require('express');
var app = express();

app.disable('x-powered-by');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var api = {};
api.transmitter = require('./modules/transmitter/routes');
app.use('/api/transmitter', api.transmitter);

module.exports = app;