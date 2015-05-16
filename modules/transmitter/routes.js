var express = require('express');
var router = express.Router();
var transmitter = require('./transmitter');

router.get('/:action', function(req, res) {
	transmitter.write(req.params.action);
	res.send(200);
});

module.exports = router;