'use strict';

var path = process.cwd();
var TimeParser = require(path + '/app/controllers/timeParser.server.js');

module.exports = function (app, passport) {
	var timeParser = new TimeParser();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
	
	app.route('/:date')
		.get(timeParser.parseDate);
};
