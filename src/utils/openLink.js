// @flow

const opn = require('opn');

const openLink = (url /* : string */) /* : void */ => opn(url, { wait: false });

module.exports = openLink;
