var request = require('request'),
    config  = require('./config');

function steamAPI(key) {

    console.log('API GO!');

    this.key = config.steamapi.key;

    this.endpointDomain = 'http://api.steampowered.com';
}

// ISteamUser
steamAPI.prototype.GetFriendList = function(steamid) {

}

steamAPI.prototype.GetPlayerBans = function(steamid) {

}

steamAPI.prototype.GetPlayerSummaries = function(steamid) {

}

steamAPI.prototype.GetUserGroupList = function(steamid) {

}

steamAPI.prototype.resolveVanity = function(name) {

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