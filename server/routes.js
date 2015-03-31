/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/collections', require('./api/collection'));
  app.use('/api/collection-items', require('./api/collection-item'));
  app.use('/api/people', require('./api/people'));
  app.use('/api/videos', require('./api/video'));
  app.use('/api/brands', require('./api/brand'));
  app.use('/api/locations', require('./api/location'));
  app.use('/api/executions', require('./api/execution'));
  app.use('/api/projects', require('./api/project'));
  app.use('/api/platforms', require('./api/platform'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/accounts', require('./api/account'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
