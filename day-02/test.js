const assert = require('assert');
const solution = require('./part1');

describe('', () => {
  it('should return the game number if no games exceed maximums', () => {
    const gameLine = 'Game 95: 6 blue, 1 green; 3 red, 11 green; 4 blue';
    assert.strictEqual(solution(gameLine), 95);
  });
  it('should return the zero if no games exceed maximums', () => {
    const gameLine = 'Game 95: 16 blue, 1 green; 3 red, 11 green; 4 blue';
    assert.strictEqual(solution(gameLine), 0);
  });
});
