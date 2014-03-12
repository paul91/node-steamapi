var request = require('request'),
    config  = require('./config');

function steamAPI(key) {

    console.log('API GO!');

    this.key = config.steamapi.key;

    this.endpointDomain = 'http://api.steampowered.com';
}

steamAPI.request = function(options) {
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          obj = JSON.parse(body);
          console.log(obj);
        }
    });
}

// ISteamUser
steamAPI.prototype.GetFriendList = function(steamid) {

    var options = {
        url: this.endpointDomain + '/ISteamUser/GetPlayerSummaries/v0002/',
        qs: {
            key: this.key,
            steamids: steamids
        }
    }

    steamAPI.request(options)

}

steamAPI.prototype.GetPlayerBans = function(steamids) {

    var options = {
        url: this.endpointDomain + '/ISteamUser/GetPlayerBans/v0001/',
        qs: {
            key: this.key,
            steamids: steamids
        }
    }

    steamAPI.request(options)

}

steamAPI.prototype.GetPlayerSummaries = function(steamids) {

    var options = {
        url: this.endpointDomain + '/ISteamUser/GetPlayerSummaries/v0002/',
        qs: {
            key: this.key,
            steamids: steamids
        }
    }

    steamAPI.request(options)

}

steamAPI.prototype.GetUserGroupList = function(steamid) {

    var options = {
        url: this.endpointDomain + '/ISteamUser/GetUserGroupList/v0001/',
        qs: {
            key: this.key,
            steamid: steamid
        }
    }

    steamAPI.request(options)

}

steamAPI.prototype.resolveVanity = function(name) {

    var options = {
        url: this.endpointDomain + '/ISteamUser/ResolveVanityURL/v0001/',
        qs: {
            key: this.key,
            vanityurl: name
        }
    }

    steamAPI.request(options)

}

// IPlayerService
steamAPI.prototype.GetRecentlyPlayedGames = function(steamid) {

}

steamAPI.prototype.getOwnedGames = function(steamid) {


}

steamAPI.prototype.GetSteamLevel = function(steamid) {

}

steamAPI.prototype.GetBadges = function(steamid) {

}

exports.connection = steamAPI;