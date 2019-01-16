// @flow
import { format as dfFormat } from 'date-fns';

const format = (date: number): string =>
  dfFormat(new Date(date), 'MMM dd, yyyy');

export default format;
