var serialPort = require('serialport');

var myPort = new serialPort.SerialPort('/dev/ttyUSB1', {
	baudrate: 9600,
	dataBits: 8,
	parity: 'none',
	stopBits: 1,
	flowControl: false,
	parser: serialPort.parsers.readline('\n')
});

myPort.on('open', function() {
	console.log('Open Serial Communication');

	myPort.on('data', function(data) {
		console.log('Received: ' + data);
	});
});

module.exports = myPort;