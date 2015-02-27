var getPost = require('../../src/lib/getPost');
require('chai').should();

describe('blog', function () {
	describe.only('getPost', function () {
		it('should read a post', function (done) {
			getPost(__dirname + '/../fixtures/test-post.txt')
				.then(function (data) {
					data.title.should.equal('test-post');
					data.content.should.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci eros, feugiat et purus non, facilisis ullamcorper arcu. Curabitur rutrum scelerisque sem egestas fermentum. Duis sed posuere odio, a eleifend justo. Nullam vulputate diam vehicula velit euismod, vel feugiat nisl porta. Donec eu purus eget velit scelerisque interdum. Proin at consectetur odio. Vestibulum sed purus orci. Donec faucibus, ligula eu volutpat posuere, odio eros laoreet est, at gravida diam velit vel ipsum. Morbi porta id nunc eu pellentesque. \n');
					data.excerpt.should.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci eros, feugiat et purus non, ');
					done();
				});
		});
	});
});
