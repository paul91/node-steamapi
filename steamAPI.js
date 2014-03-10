var request = require('request');

function steamAPI(key) {
	this.key = key;

	this.start = new Date();

	this.endpointDomain = 'http://api.steampowered.com';
}

steamAPI.prototype.getUser = function() {

	console.log('Getting user.');

}

steamAPI.prototype.getOwnedGames = function() {

}

exports.connection = steamAPI;