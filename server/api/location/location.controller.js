'use strict';

var request = require('request')
  , cmsRoot = require('../../config/environment').cms.uri
  , resourceBase = cmsRoot + '/locations';

// Get list of projects
exports.index = function(req, res) {
  request({ 
    method: 'GET',
    uri: resourceBase,
    qs: req.query
  }).pipe(res);
};

// Get a single project
exports.show = function(req, res) {
  request({ 
    method: 'GET',
    uri: resourceBase + '/' + req.params.id,
    qs: req.query
  }).pipe(res);
};

// Creates a new project in the DB.
exports.create = function(req, res) {
  request({ 
    method: 'POST', 
    uri: resourceBase,
    qs: req.query,
    body: req.body, 
    json: true 
  }).pipe(res);
};

// Updates an existing project in the DB.
exports.update = function(req, res) {
  request({ 
    method: 'PUT', 
    uri: resourceBase + '/' + req.body._id,
    qs: req.query,
    body: req.body, 
    json: true 
  }).pipe(res);
};

// Deletes a project from the DB.
exports.destroy = function(req, res) {
  request({ 
    method: 'DELETE', 
    uri: resourceBase + '/' + req.params.id,
    qs: req.query
  }).pipe(res);
};

function handleError(res, err) {
  return res.send(500, err);
}