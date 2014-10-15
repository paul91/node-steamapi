var nock = require('nock');
var request = require('request');

// nock.recorder.rec();

describe('your project', function () {

  it('should do great things in life and love', function (done) {

    var scope = nock('http://api.steampowered.com')
     .get('/ISteamUser/ResolveVanityURL/v0001?key=test&vanityurl=PieKingOne')
     .reply(200, {"response":{"steamid":"76561197969671378","success":1}});

    request.get('http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001?key=test&vanityurl=PieKingOne', function(err, res) {
      if (err) {
        console.log(err);
        done(err);
      }
      console.log(res.body);
      done();
    });
  });
});
