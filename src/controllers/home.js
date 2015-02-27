var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var getPost = require('../lib/getPost');
var config = require(path.join(__dirname, '../config'));

module.exports = function (req, res, next) {
    fs.readdirAsync(config.postDirectory)
        .then(function (files) {
            return files
                .map(function (file) {
                    return path.join(config.postDirectory, file);
                })
                .map(getPost);
        })
        .then(Promise.all)
        .then(function (posts) {
            res.render('index', {
                title: 'My blog',
                posts: posts
            });
        })
        .catch(next);
};
