import test from 'ava';
import readChunk from 'read-chunk';
import m from '.';

const check = filename => m(readChunk.sync(filename, 0, 58));

test('detects EPUB from Buffer', t => {
	t.true(check('fixture.epub'));
});
