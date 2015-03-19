'use strict';

// Staging specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: process.env.MONGO_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME || 'mongodb://localhost/espn-creativeworks-showcase-stg'
  },

  cms: {
    uri: process.env.CMS_URI || 'http://localhost:3000/api'
  },

  seedDB: false
};