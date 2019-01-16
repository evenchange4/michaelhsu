/* eslint no-unused-expressions: 0 */
// @flow
import yargs from 'yargs';
import chalk from 'chalk';
import pkg from '../../package.json';

const cli = () => {
  yargs
    .usage(
      `
  The Michael Hsu CLI

  Usage:
  $ npx ${chalk.green('$0')}`,
    )
    .strict()
    .alias('v', 'version')
    .alias('h', 'help')
    .version(pkg.version)
    .locale('en')
    .epilogue(
      'For more information go to https://github.com/evenchange4/michaelhsu',
    )
    .fail((msg, err) => {
      if (err) throw err; // preserve stack
      console.error(chalk.red(msg)); // eslint-disable-line
      yargs.showHelp();
      process.exit(1);
    }).argv;
};

export default cli;
