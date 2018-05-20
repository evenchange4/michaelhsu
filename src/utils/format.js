// @flow
const dfFormat = require('date-fns/format');

const format = (date /* : number */) /* : string */ =>
  dfFormat(new Date(date), 'MMM DD, YYYY');

module.exports = format;
