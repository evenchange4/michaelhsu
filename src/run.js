// @flow
import cli from './clis/cli';
import { renderUI } from './index';

const run = async () => {
  try {
    await cli();
    renderUI();
  } catch (error) {
    console.error(error); // eslint-disable-line
    process.exit(1);
  }
};

export default run;
