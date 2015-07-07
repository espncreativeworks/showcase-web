'use strict';

var express = require('express')
	, SitemapController = require('./sitemap.controller');

var router = express.Router();

router.get('/', SitemapController.show);

module.exports = router;