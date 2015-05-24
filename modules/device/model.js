var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	alias: { type: String, required: true },
	type: { type: String, required: true },
	actions : { type: [String], default: [] }
});

module.exports = mongoose.model('Devices', schema);