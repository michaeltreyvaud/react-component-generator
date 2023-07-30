const path = require('path');
const fs = require('fs').promises;

const generateIndex = require('./generateIndex');
const generateContent = require('./generateComponentContent');
const generateStyle = require('./generateComponentStyle');

const INDEX_NAME = 'index';
const JS_EXTENSION = '.js';
const CSS_EXTENSION = '.module.css';

const formatIndexName = (dir) => path.resolve(`${dir}${path.sep}${INDEX_NAME}${JS_EXTENSION}`);
const formatComponentFileName = (dir, name) => path.resolve(`${dir}${path.sep}${name}${JS_EXTENSION}`);
const formatComponentStyleName = (dir, name) => path.resolve(`${dir}${path.sep}${name}${CSS_EXTENSION}`);

const createComponent = async (dir, name) => {
  const componentIndex = generateIndex(name);
  const componentContent = generateContent(name);
  const componentStyle = generateStyle(name);
  await fs.writeFile(formatIndexName(dir, name), componentIndex);
  await fs.writeFile(formatComponentFileName(dir, name), componentContent);
  await fs.writeFile(formatComponentStyleName(dir, name), componentStyle);
};

module.exports = createComponent;
