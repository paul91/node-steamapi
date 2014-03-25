var request = require('request'),
    _ = require('underscore');

function init(config) {
  var baseUrl = 'http://api.steampowered.com/ISteamUser/';
  var resources = ['GetPlayerSummaries', 'GetFriendList', 'GetPlayerBans', 'GetUserGroupList', 'ResolveVanityURL'];

    return _.object(resources.map(function(resource) {
        return [resource, template.bind(undefined, config, baseUrl, resource)];
    }));
}
module.exports = init;

function template(config, baseUrl, property, callback, options) {

    options = options || {};
    var qs = JSON.parse((JSON.stringify({key: config.apiKey}) + JSON.stringify(options.qs)).replace(/}{/g,","));

    request.get(baseUrl + property + '/v0001/', {
      qs: qs
    }, function(err, res) {
      callback(err, JSON.parse(res.body), res);
    });

}
