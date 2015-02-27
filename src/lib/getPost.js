var Promise = require('bluebird');
var fs = require('fs');
var path = require('path');

module.exports = function getPost(file) {
    return fs.readFileAsync(file, 'utf8').then(function (content) {
        return {
            title: path.basename(file, '.txt'),
            content: content,
            excerpt: content.substr(0, 100)
        };
    });
};
