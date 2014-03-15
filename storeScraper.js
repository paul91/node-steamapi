var request = require('request');

function getApp(appid, callback) {

}

function done() {
	mongoose.connection.close();
	console.log('Done.', results);
}

var apps = [ '10' ],
    results = [];

function series(app) {
	if (item) {
		getApp( app, function(result) {
			results.push(result);
			return series(items.shift());
		})
	} else {
		return done();
	}
}series(apps.shift());
