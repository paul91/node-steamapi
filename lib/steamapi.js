var request = require('request'),
    _ = require('underscore');

function init(config) {
  var baseUrl = 'http://api.steampowered.com/';
  var resources = [
    {method: 'GetFriendList', interface: 'ISteamUser', version: 'v0001'},
    {method: 'GetPlayerBans', interface: 'ISteamUser', version: 'v0001'},
    {method: 'GetPlayerSummaries', interface: 'ISteamUser', version: 'v0002'},
    {method: 'GetUserGroupList', interface: 'ISteamUser', version: 'v0001'},
    {method: 'ResolveVanityURL', interface: 'ISteamUser', version: 'v0001'},
    {method: 'GetRecentlyPlayedGames', interface: 'IPlayerService', version: 'v0001'},
    {method: 'GetSteamLevel', interface: 'IPlayerService', version: 'v0001'},
    {method: 'GetBadges', interface: 'IPlayerService', version: 'v0001'},
    {method: 'GetCommunityBadgeProgress', interface: 'IPlayerService', version: 'v0001'},
    {method: 'IsPlayingSharedGame', interface: 'IPlayerService', version: 'v0001'},
    {method: 'GetOwnedGames', interface: 'IPlayerService', version: 'v0001'},
    {method: 'GetAppList', interface: 'ISteamApps', version: 'v0001'},
    {method: 'UpToDateCheck', interface: 'ISteamApps', version: 'v0001'},
    {method: 'GetAppList', interface: 'ISteamApps', version: 'v0002'}
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
