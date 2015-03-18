'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/espn-creativeworks-showcase'
  },

  cms: {
    uri: process.env.CMS_URI || 'http://localhost:3000/api'
  },

  seedDB: true
};
