var steam  = require('./lib/steamapi.js'),
    config = require('./config');

var api = steam(config);

api.test();
api.test2();
