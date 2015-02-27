var request = require('supertest');
require('chai').should();

describe('A Suite', function () {
    var app = require('../src/app');

    it('should be a test', function (done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function (err, resp) {
                if (err) {
                    return done(err);
                }

                resp.text.should.contain('Express');
                done();
            });
    });
});
