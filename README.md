# win-7z
Use `7z` compress or extract `zip` archive for Windows

## Install

## Usage

```js
// zip folder
const path = require('path');
const win7z = require('win-7z');

win7z.zip(path.join(__dirname, 'test.zip'), path.join(__dirname, 'test.js')).then(function(directoryPath) {
  console.log('compress', directoryPath, 'success.');
});

// unzip archive
win7z.unzip(path.join(__dirname, 'test.zip'), path.join(__dirname, 'test')).then(function(directoryPath) {
  console.log('extract', directoryPath, 'success.');
});
```

## API

- zip
- zipSync
- unzip
- unzipSync
