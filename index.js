#! /usr/bin/env node

const { Command } = require('commander');

const Logger = require('./src/lib/Logger');
const generate = require('./src/generate');

const program = new Command();
const logger = new Logger();

program.command('generate')
  .description('Generate a dummy react component')
  .argument('<name>', 'Name of the component')
  .option('-d, --directory <directory>', 'Directory to place component')
  .option('--subdir', 'Places component into its own directory location')
  .action(async (name, options) => {
    logger.log('Generating Component');
    await generate(name, options);
    logger.log('Component created!');
  });

program.parse();
