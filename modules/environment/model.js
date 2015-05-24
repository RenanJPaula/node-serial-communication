var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	alias: { type: String, required: true },
	type: { type: String, required: true },
	devices : { type: [mongoose.Schema.Types.ObjectId], default: [], ref: 'Devices' }
});

module.exports = mongoose.model('Environment', schema);