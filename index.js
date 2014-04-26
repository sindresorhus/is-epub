'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 58) {
		return false;
	}

	return buf[0] === 80 && buf[1] === 75 && buf[2] === 3 && buf[3] === 4 &&
		buf.slice(30, 58).toString() === 'mimetypeapplication/epub+zip';
};
