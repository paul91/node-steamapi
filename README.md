node-steamapi - Steam API for Node.js
============

```node steamapi``` provides a simple programmatic access to Steam's API.

```js
var steamapi = require('steamapi');

var credentials = {
  apiKey: 'yourkey'
};

var api = steamapi(credentials);

api.getPlayerSummaries(function(err, results) {

  console.log(results);

  }, {
    qs: {
      steamids: '123456789'
    }
});
```

## License

`node-steamapi` is available under the Apache License, Version 2.0. See LICENSE for more details.
