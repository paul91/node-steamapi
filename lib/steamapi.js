var request = require('request'),
    _ = require('underscore');

function init(config) {
  var baseUrl = 'http://api.steampowered.com/';
  var resources = [
    {method: 'GetPlayerSummaries', interface: 'ISteamUser', version: 'v0002'},
    {method: 'ResolveVanityURL', interface: 'ISteamUser', version: 'v0001'},
    {method: 'GetOwnedGames', interface: 'IPlayerService', version: 'v0001'}
  ];

    return _.object(resources.map(function(resource) {
        return [resource.method, template.bind(undefined, config, baseUrl, resource)];
    }));
}
module.exports = init;

function template(config, baseUrl, property, callback, options) {

    options = options || {};
    var qs = JSON.parse((JSON.stringify({key: config.apiKey}) + JSON.stringify(options.qs)).replace(/}{/g,","));

    request.get(baseUrl + property.interface + '/' + property.method + '/' + property.version + '/', {
      qs: qs
    }, function(err, res) {
      callback(err, JSON.parse(res.body), res);
    });

}
