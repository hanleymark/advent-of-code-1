const assert = require('assert');
const solution = require('./part2');

describe('Day 1: It should get the first and last digits from a string and make the correct total', () => {
  it('should get digits when >1 are present', () => {
    assert.strictEqual(solution('2SGH4JHG5'), 25);
    assert.strictEqual(solution('DF34D'), 34);
  });
  it('should get double digits when 1 IS present', () => {
    assert.strictEqual(solution('4'), 44);
    assert.strictEqual(solution('FHSKRH7KHF'), 77);
  });
  it('should convert words to digits and get the correct total', () => {
    assert.strictEqual(solution('3onehdhcknine'), 39);
    assert.strictEqual(solution('eight5gckh3jdnine'), 89);
  });
  it('should convert words to digits and get the correct total when words intersect', () => {
    assert.strictEqual(solution('frdseightwopm'), 82);
  });
});
