'use strict';

var _ = require('lodash');
var Client = require('../utils/client');

// Get a single vimeo video
exports.show = function (req, res) {
  Client.get('/videos/' + req.params.id, function (err, response, body){
    if (err) { handleError(res, err); return; }
    res.status(response.statusCode).json(body);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}