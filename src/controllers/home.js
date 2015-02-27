 var Promise = require('bluebird');
 var fs = Promise.promisifyAll(require('fs'));
 var path = require('path');
 var getPost = require('../lib/getPost');

 var postsDirectory = path.join(__dirname, '../posts');

 module.exports = function (req, res, next) {
     fs.readdirAsync(postsDirectory)
         .then(function (files) {
             return files.map(function (file) {
                 return path.join(postsDirectory, file);
             }).map(getPost);
         })
         .then(Promise.all)
         .then(function (postExcerpts) {
             res.render('index', {
                 title: 'Express',
                 posts: postExcerpts
             });
         })
         .catch(next)
 };
