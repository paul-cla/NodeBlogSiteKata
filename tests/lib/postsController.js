var request = require('supertest');
var express = require('express');
var path = require('path');
require('chai').should();

var proxyquire = require('proxyquire');

var controller, fakeConfig;

describe('postsController', function () {

    beforeEach(function () {
        app = express();

        fakeConfig = {
            postDirectory: path.join(__diranem, '../fixtures')
        };
    });

    controller = proxyquire(path.join(__dirname, '../../src/controllers/getPost'), {
        '../config': fakeConfig
    });

    describe('get', function () {
        it('should return', function (done) {
            request(app)
                .get('/test-post')
                .expect(200)
                .end(function (err, res) {
                    if (err) {
                        return done(err);
                    }
                    res.text.should.equal('');
                });
        });
    });
});
