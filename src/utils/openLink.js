// @flow

import opn from 'opn';

const openLink = (url: string): void => opn(url, { wait: false });

export default openLink;
