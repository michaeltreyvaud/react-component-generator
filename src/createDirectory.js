const path = require('path');
const fs = require('fs');

const getDirectory = (name, options) => {
  const { directory, subdir } = options;
  if (directory) {
    // dir from provided directory option
    return subdir
      ? path.resolve(`${directory}${path.sep}${name}`)
      : path.resolve(`${directory}`);
  }
  // dir from where cmd was called
  return subdir
    ? path.resolve(`${process.cwd()}${path.sep}${name}`)
    : path.resolve(`${process.cwd()}`);
};

const createDirectory = (name, options) => {
  const dir = getDirectory(name, options);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
};

module.exports = createDirectory;
