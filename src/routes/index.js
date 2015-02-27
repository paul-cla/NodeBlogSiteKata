var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var getPost = require('../lib/getPost');
var home = require('../controllers/home');

var postsDirectory = path.join(__dirname, '../posts');

/* GET home page. */
router.get('/', home);

router.get('/post/:postName', function (req, res, next) {
    getPost(path.join(postsDirectory, req.params.postName + '.txt'))
        .then(function (fileContents) {
            res.render('post', fileContents);
        });
});

module.exports = router;
