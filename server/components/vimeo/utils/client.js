var config = require('../../../config/environment');
var request = require('request');
var VimeoClient = request.defaults({
  baseUrl: 'https://api.vimeo.com/',
  headers: {
    'Authorization': 'bearer ' + config.vimeo.accessToken,
    'Accept': 'application/vnd.vimeo.*+json;version=3.2',
    'User-Agent': 'ESPN CreativeWorks Showcase v' + config.version
  },
  json: true
});

exports = module.exports = VimeoClient;