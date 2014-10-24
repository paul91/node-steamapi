var steamapi = require('../lib/steamapi')({ apiKey: 'test' });
var nock     = require('nock');
var request  = require('request');
var expect   = require('expect.js');

describe('Node Steam API Tool', function () {

  it("Ensure methods are properly created", function () {
    expect(typeof steamapi.ResolveVanityURL).to.eql('function');
  });

});
