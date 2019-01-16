// @flow
/** @jsx h */
import path from 'path';
import { h, render } from 'ink';
import termImg from 'term-img';
import terminalImage from 'terminal-image';
import App from './App';

const fallback = async () => {
  const image = await terminalImage.file(
    path.join(__dirname, '../../images/avatar-fallback.png'),
  );
  console.log(image); // eslint-disable-line
};

const renderUI = () => {
  // Note: 1. render avatar image
  termImg(path.join(__dirname, '../../images/avatar.png'), {
    fallback,
  });

  // Note: 2. render UI
  render(<App />);
};

export default renderUI;
