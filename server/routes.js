/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/vimeo', require('./components/vimeo'));
  app.use('/api/collections', require('./api/collection'));
  app.use('/api/collection-items', require('./api/collection-item'));
  app.use('/api/people', require('./api/people'));
  app.use('/api/videos', require('./api/video'));
  app.use('/api/images', require('./api/image'));
  app.use('/api/brands', require('./api/brand'));
  app.use('/api/locations', require('./api/location'));
  app.use('/api/executions', require('./api/execution'));
  app.use('/api/projects', require('./api/project'));
  app.use('/api/execution-tags', require('./api/execution-tag'));
  app.use('/api/industries', require('./api/industry'));
  app.use('/api/sports', require('./api/sport'));
  app.use('/api/platforms', require('./api/platform'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/accounts', require('./api/account'));

  app.use('/auth', require('./auth'));
  app.use('/sitemap', require('./components/sitemap'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
