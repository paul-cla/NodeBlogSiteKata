var path = require('path');
var getPost = require('../lib/getPost');

var postsDirectory = path.join(__dirname, '../posts');

module.exports = function (req, res, next) {
    getPost(path.join(postsDirectory, req.params.postName + '.txt'))
        .then(function (fileContents) {
            res.render('post', fileContents);
        });
};
