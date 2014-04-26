# is-epub [![Build Status](https://travis-ci.org/sindresorhus/is-epub.svg?branch=master)](https://travis-ci.org/sindresorhus/is-epub)

> Check if a Buffer/Uint8Array is [EPUB](http://en.wikipedia.org/wiki/EPUB)

Used by [file-type](https://github.com/sindresorhus/file-type).


## Install

```sh
$ npm install --save is-epub
```

```sh
$ bower install --save is-epub
```

```sh
$ component install sindresorhus/is-epub
```


## Usage

##### Node.js

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var isEpub = require('is-epub');
var buffer = readChunk.sync('unicorn.epub', 0, 58);

isEpub(buffer);
//=> true
```

##### Browser

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.epub');
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
	isEpub(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```


## API

### isEpub(buffer)

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 58 bytes.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
