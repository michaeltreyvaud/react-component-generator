const { Command } = require('commander');

const generate = require('./src/generate');

const program = new Command();

program.command('generate')
  .description('Generate a dummy react component')
  .argument('<name>', 'Name of the component')
  .option('-d, --directory <directory>', 'Directory to place component')
  .option('--subdir', 'Places component into its own directory location')
  .action(async (name, options) => {
    console.log('Generating Component');
    await generate(name, options);
    console.log('Component created!');
  });

program.parse();
