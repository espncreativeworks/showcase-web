'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/espn-creativeworks-showcase'
  },

  cms: {
    uri: 'https://showcase-cms-stg.herokuapp.com/api'
  },

  seedDB: true
};
