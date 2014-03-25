var request = require('request'),
    _ = require('underscore');

function init(config) {
  var baseUrl = 'http://api.steampowered.com/ISteamUser/';
  var resources = ['GetPlayerSummaries'];

    return _.object(resources.map(function(resource) {
        return [resource, template.bind(undefined, config, baseUrl, resource)];
    }));
}
module.exports = init;

function template(config, baseUrl, property) {
    console.log('Getting: ' + baseUrl + property + '/v0001/');

    request.get(baseUrl + property + '/v0001/', {
    	qs: {
    		key: '',
    		steamids: ''
    	}
    }, function(err, res) {
    	console.log(res.body);
    });
}
