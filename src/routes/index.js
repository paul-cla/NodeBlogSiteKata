var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var getPost = require('../lib/getPost');
var home = require('../controllers/home');
var getPost = require('../controllers/getPost');

var postsDirectory = path.join(__dirname, '../posts');

/* GET home page. */
router.get('/', home);
router.get('/post/:postName', getPost);

module.exports = router;
