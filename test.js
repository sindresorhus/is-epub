'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isEpub = require('./index');

function check(filename) {
	return isEpub(readChunk.sync(filename, 0, 58));
}

it('should detect EPUB from Buffer', function () {
	assert(check('fixture.epub'));
});
