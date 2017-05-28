/* eslint-env node, mocha */
/* eslint-disable import/no-extraneous-dependencies */

import { expect } from 'chai';
import { getMonday } from '../../src/utils/date.utils';

describe('data.utils', () => {
  describe('getMonday', () => {
    it('should return current day', () => {
      const currentDate = new Date(2016, 8, 12);
      const monday = getMonday(currentDate);

      expect(monday.getFullYear()).to.equal(currentDate.getFullYear());
      expect(monday.getMonth()).to.equal(currentDate.getMonth());
      expect(monday.getDate()).to.equal(currentDate.getDate());
    });

    it('should return monday in this week', () => {
      const currentDate = new Date(2016, 8, 18);
      const actualMonday = new Date(2016, 8, 12);
      const expectedMonday = getMonday(currentDate);

      expect(expectedMonday.getFullYear()).to.equal(actualMonday.getFullYear());
      expect(expectedMonday.getMonth()).to.equal(actualMonday.getMonth());
      expect(expectedMonday.getDate()).to.equal(actualMonday.getDate());
    });
  });
});
