var { expect } = require('chai');

describe('r8limit', () => {
  describe('r8limit package exists', () => {
    it('should be able to require the package', () => {
      expect(() => {
        require('../');
      }).to.not.throw();
    });
  });
});
