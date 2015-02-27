var path = require('path');
var getPost = require('../lib/getPost');
var config = require(path.join(__dirname, '../config'));

module.exports = function (req, res, next) {
    getPost(path.join(config.postDirectory, req.params.postName + '.txt'))
        .then(function (fileContents) {
            res.render('post', fileContents);
        });
};
