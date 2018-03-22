'use strict';
module.exports = buffer => {
	if (!buffer || buffer.length < 58) {
		return false;
	}

	return buffer[0] === 80 &&
		buffer[1] === 75 &&
		buffer[2] === 3 &&
		buffer[3] === 4 &&
		buffer.slice(30, 58).toString() === 'mimetypeapplication/epub+zip';
};
