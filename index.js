const { Command } = require('commander');
const createDirectory = require('./src/createDirectory');
const createComponent = require('./src/createComponent');

const program = new Command();

const formatComponentName = (str) => str.charAt(0).toUpperCase() + str.slice(1);

program.command('generate')
  .description('Generate a dummy react component')
  .argument('<directory>', 'Directory to place component')
  .argument('<name>', 'Name of the component')
  .action(async (directory, name) => {
    const componentName = formatComponentName(name);
    const generatedDirectory = createDirectory(directory, componentName);
    await createComponent(generatedDirectory, componentName);
  });

program.parse();
