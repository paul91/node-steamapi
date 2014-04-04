var request = require('request'),
    _ = require('underscore');

function init(config) {
  var baseUrl = 'http://api.steampowered.com/';
  var resources = [
    {method: 'getFriendList', interface: 'ISteamUser', version: 'v0001'},
    {method: 'getPlayerBans', interface: 'ISteamUser', version: 'v0001'},
    {method: 'getPlayerSummaries', interface: 'ISteamUser', version: 'v0002'},
    {method: 'getUserGroupList', interface: 'ISteamUser', version: 'v0001'},
    {method: 'resolveVanityURL', interface: 'ISteamUser', version: 'v0001'},
    {method: 'getRecentlyPlayedGames', interface: 'IPlayerService', version: 'v0001'},
    {method: 'getSteamLevel', interface: 'IPlayerService', version: 'v0001'},
    {method: 'getBadges', interface: 'IPlayerService', version: 'v0001'},
    {method: 'getCommunityBadgeProgress', interface: 'IPlayerService', version: 'v0001'},
    {method: 'isPlayingSharedGame', interface: 'IPlayerService', version: 'v0001'},
    {method: 'getOwnedGames', interface: 'IPlayerService', version: 'v0001'},
    {method: 'getAppList', interface: 'ISteamApps', version: 'v0001'},
    {method: 'upToDateCheck', interface: 'ISteamApps', version: 'v0001'},
    {method: 'getAppList', interface: 'ISteamApps', version: 'v0002'}
  ];

    return _.object(resources.map(function(resource) {
        return [resource.method, template.bind(undefined, config, baseUrl, resource)];
    }));
}
module.exports = init;

function template(config, baseUrl, property, callback, options) {

    options = options || {};
    var version = property.version || options.version;
    var qs = JSON.parse((JSON.stringify({key: config.apiKey}) + JSON.stringify(options.qs)).replace(/}{/g,","));

    request.get(baseUrl + property.interface + '/' + property.method + '/' + version + '/', {
      qs: qs
    }, function(err, res) {
      try {

        obj = JSON.parse(res.body);
        if(obj.error) return callback(obj.error);

        callback(err, obj, res);
      }
      catch(e) {
        callback(e, null, res);
      }
    });

}
