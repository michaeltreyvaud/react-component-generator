const path = require('path');
const fs = require('fs');

const createDirectory = (directory, name) => {
  const dir = path.resolve(`${directory}${path.sep}${name}`);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
};

module.exports = createDirectory;
