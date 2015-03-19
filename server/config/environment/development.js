'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost/espn-creativeworks-showcase-dev'
  },

  cms: {
    uri: process.env.CMS_URI || 'http://localhost:3000/api'
  },

  seedDB: true
};
