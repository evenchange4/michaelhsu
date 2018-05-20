#!/usr/bin/env node
// @flow
/* eslint no-unused-expressions: 0 */

const path = require('path');
const chalk = require('chalk');
const importJsx = require('import-jsx');
const { h, render } = require('ink');
const termImg = require('term-img');
const terminalImage = require('terminal-image');
const pkg = require('../package.json');

const App = importJsx('../src/App', { pragma: 'h' });

// Note: CLI Arguments
require('yargs')
  .usage(
    `
The Michael Hsu CLI

Usage:
  $ npx ${chalk.green('$0')}`
  )
  .strict()
  .alias('h', 'help')
  .version(pkg.version)
  .alias('v', 'version')
  .locale('en')
  .epilogue(
    'For more information go to https://github.com/evenchange4/michaelhsu'
  )
  .fail((msg, err) => {
    if (err) throw err; // preserve stack
    console.error(chalk.red(msg)); // eslint-disable-line
    process.exit(1);
  }).argv;

const fallback = async () => {
  const image = await terminalImage.file(
    path.join(__dirname, './images/avatar-fallback.png')
  );
  console.log(image); // eslint-disable-line
};

// Note: render avatar image
termImg(path.join(__dirname, './images/avatar.png'), {
  fallback,
});

// Note: render UI
render(h(App));
