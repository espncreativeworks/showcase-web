'use strict';

var express = require('express');
var controller = require('./project.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/featured', controller.featured);
router.get('/:id', controller.show);
router.get('/:id/tags', controller.tags);
router.get('/:id/executions', controller.executions);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;