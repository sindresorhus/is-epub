import test from 'ava';
import readChunk from 'read-chunk';
import isEpub from './index.js';

const check = filename => isEpub(readChunk.sync(filename, 0, 58));

test('detects EPUB from Buffer', t => {
	t.true(check('fixture.epub'));
});
