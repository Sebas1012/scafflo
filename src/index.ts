import { Command } from 'commander';
import { createMicroservice } from './commands/generate-ms';

export const runCLI = () => {
  const program = new Command();

  program
    .command('create <name>')
    .description('Generate a new microservice scaffold')
    .action((name) => {
      createMicroservice(name);
    });

  program.parse(process.argv);
};

