node-steamapi - Steam API for Node.js
============

```node steamapi``` provides simple programmatic access to Steam's API.

```js
var steamapi = require('steamapi');

var credentials = {
  apiKey: 'yourkey'
};

var api = steamapi(credentials);

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
```

## License

```node-steamapi``` is available under the Apache License, Version 2.0. See LICENSE for more details.
