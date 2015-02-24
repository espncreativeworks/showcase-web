'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();

router
  .get('/', passport.authenticate('facebook', {
    scope: ['email', 'public_profile'],
    failureRedirect: '/signup',
    session: true
  }))

  .get('/callback', passport.authenticate('facebook', {
    failureRedirect: '/signup',
    session: true
  }), auth.setTokenCookie);

module.exports = router;