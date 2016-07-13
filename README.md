# win-7z
Use `7z` compress or extract `zip` archive for Windows

## Install

**Node.js 4 or higher**

    $ npm install win-7z --save

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

- win7z.zip(archivePath, filePath)

  Add files to archive

- win7z.zipSync(archivePath, filePath)

  Synchronous version of `zip`

- win7z.unzip(archivePath, filePath)

  Extract files from archive

- win7z.unzipSync(archivePath, filePath)

  Synchronous version of `unzip`
