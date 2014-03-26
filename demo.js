var steam  = require('./lib/steamapi.js'),
    config = require('./config');

var api = steam(config);

api.ResolveVanityURL(function(err, results) {
  if(err) return console.error(err);

  api.GetPlayerSummaries(function(err, results) {
    if(err) return console.error(err);

    console.log(results.response.players[0].personaname);
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

api.GetOwnedGames(function(err, results) {
  if(err) return console.error(err);

  console.log('Games owned: ' + results.response.game_count);
}, {
  qs: {
    steamid: '76561197969671378'
  }
});
