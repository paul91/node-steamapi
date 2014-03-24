var request = require('request'),
    _ = require('underscore');

function init(config) {
  var baseUrl = 'http://api.example.com';
  var resources = ['test', 'test2'];

    return _.object(resources.map(function(resource) {
        return [resource, template.bind(undefined, config, baseUrl, resource)];
    }));
}
module.exports = init;

function template(config, baseUrl, property) {
    console.log('Getting: ' + baseUrl + '/' + property);
}
