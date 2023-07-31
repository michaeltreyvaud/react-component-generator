const createDirectory = require('./createDirectory');
const createComponent = require('./createComponent');

const formatComponentName = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const generate = async (name, options) => {
  const componentName = formatComponentName(name);
  const dir = createDirectory(name, options);
  await createComponent(componentName, dir, options);
};

module.exports = generate;
