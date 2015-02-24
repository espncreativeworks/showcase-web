'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/espn-creativeworks-showcase'
  },

  cms: {
    uri: 'http://localhost:3000/api'
  },

  seedDB: true
};
