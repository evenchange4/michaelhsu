// @flow
import format from '../format';

it('should return correct formatted string', () => {
  expect(format(1547604318000)).toBe('Jan 16, 2019');
});
