'use strict';

var express = require('express');
var controller = require('./account.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.put('/:id/email', auth.isAuthenticated(), controller.changeEmail);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.post('/', controller.create);


// User-scoped resources
var collectionController = require('../collection/collection.controller');
router.get('/me', auth.isAuthenticated(), controller.me);
router.get('/me/collections', auth.isAuthenticated(), collectionController.me.index);
router.get('/me/collections/:id', auth.isAuthenticated(), collectionController.me.show);

// must come after /accounts/me routes
router.get('/:id', auth.isAuthenticated(), controller.show); 
router.get('/:id/collections', auth.isAuthenticated(), collectionController.account.index);
router.get('/:accountId/collections/:collectionId', auth.isAuthenticated(), collectionController.account.show);


module.exports = router;
