var express = require('express');
var router = express.Router();
var Device = require('./model');

router.get('/', function(req, res) {
	Device.find({}, function(err, data) {
		if (err) {
			res.sendStatus(500);
		} else {
			res.json(data);
		}
	});
});

router.get('/:id', function(req, res) {
	var query = {
		_id: req.params.id
	};

	Device.findOne(query, function(err, data) {
		if (err) {
			res.sendStatus(404);
		} else {
			res.json(data);
		}
	});
});

router.post('/', function(req, res) {
	var device = new Device(req.body);

	device.save(function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(201).json(data);
		}
	});
});

router.put('/:id', function(req, res) {
	var query = {
		_id: req.params.id
	};
	var mod = req.body;
	delete mod._id;

	Device.update(query, mod, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

router.delete('/:id', function(req, res) {
	var query = {
		_id: req.params.id
	};

	Device.remove(query, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});


module.exports = router;