'use strict';

var express = require('express');
var VideoController = require('./videos/vimeo.video.controller');

var router = express.Router();

router.get('/videos/:id', VideoController.show);

module.exports = router;