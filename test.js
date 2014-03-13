var request = require('request'),
    config  = require('./config').steamapi;

function async(options, callback) {
	console.log('Using: ' + options.url);

	request(options, function(error, response, body) {
		if (!error && response.statusCode == 200) {
          callback(body);
        }
        else {
        	console.log(error);
        }
	});
}

var options = {
        url: config.endPoint + '/ISteamUser/ResolveVanityURL/v0001/',
        qs: {
            key: config.key,
            vanityurl: 'PieKingOne'
        }
    }

async(options, function(result) {
	console.log(result);
})
