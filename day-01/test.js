const assert = require('assert');
const solution2 = require('./solution2');

describe('Day 1: It should get the first and last digits from a string and make a two digit number', () => {
  it('should get digits when >1 are present', () => {
    assert.strictEqual(solution2('2SGH4JHG5'), '25');
    assert.strictEqual(solution2('DF34D'), '34');
  });
  it('should get double digits when 1 IS present', () => {
    assert.strictEqual(solution2('4'), '44');
    assert.strictEqual(solution2('FHSKRH7KHF'), '77');
  });
});
