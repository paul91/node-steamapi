var steam  = require('./lib/steamapi.js'),
    config = require('./config');

var api = steam(config);

api.ResolveVanityURL(function(err, results) {
  if(err) return console.error(err);

  api.GetPlayerSummaries(function(err, results) {
    if(err) return console.error(err);

    console.log(results.response.players.player[0].personaname);
  }, {
    qs: {
      steamids: results.response.steamid
    }
  });

}, {
  qs: {
    vanityurl: 'PieKingOne'
  }
});
