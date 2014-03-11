var request = require('request'),
    config  = require('./config');

function steamAPI(key) {

    console.log('API GO!');

    this.key = config.steamapi.key;

    this.endpointDomain = 'http://api.steampowered.com';
}

steamAPI.prototype.getUser = function(steamid) {

    console.log('Getting user: ' + steamid + ' with key: ' + this.key);

    console.time('Get User.');

    var options = {
        url: this.endpointDomain + '/ISteamUser/GetPlayerSummaries/v0002/?key=' + this.key + '&steamids=' + steamid
    }

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          obj = JSON.parse(body);
          console.timeEnd('Get User');
          console.log(obj.response.players[0].personaname);
        }
    });

}

steamAPI.prototype.getOwnedGames = function(steamid) {

    console.log('Getting games for user: ' + steamid + ' with key: ' + this.key);

    console.time('Get Owned.');

    var options = {
        url: this.endpointDomain + '/IPlayerService/GetOwnedGames/v0001/?key=' + this.key + '&steamid=' + steamid
    }

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          obj = JSON.parse(body);
          console.timeEnd('Get Owned');
          console.log(obj.response.game_count);
        }
    });

}

exports.connection = steamAPI;