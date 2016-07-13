'use strict';

const child_process = require('child_process');
const path = require('path');
const bin = path.join(__dirname, process.arch === 'x64' ? '7z-extra/x64/7za.exe' : '7z-extra/7za.exe');

const zip = (archivePath, filePath) => {
  let command = `${bin} a ${archivePath} ${filePath}`;

  return new Promise((resovle, reject) => {
    child_process.exec(command, err => {
      if (err) reject(err);
      else resovle(filePath);
    })
  });
};

const zipSync = (archivePath, directoryPath) => {
  let command = `${bin} a ${archivePath} ${directoryPath}`;

  child_process.execSync(command);
};

const unzip = (archivePath, directoryPath) => {
  let command = `${bin} x -o${directoryPath} ${archivePath}`;

  return new Promise((resovle, reject) => {
    child_process.exec(command, err => {
      if (err) reject(err);
      else resovle(directoryPath);
    })
  });
};

const unzipSync = (archivePath, directoryPath) => {
  let command = `${bin} x -o${directoryPath} ${archivePath}`;

  child_process.execSync(command);
};

module.exports.zip = zip;
module.exports.zipSync = zipSync;
module.exports.unzip = unzip;
module.exports.unzipSync = unzipSync;
