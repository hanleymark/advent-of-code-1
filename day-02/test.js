const assert = require('assert');
const solution1 = require('./part1');
const solution2 = require('./part2');

describe('Part 1', () => {
  it('should return the game number if no games exceed maximums', () => {
    const gameLine = 'Game 95: 6 blue, 1 green; 3 red, 11 green; 4 blue';
    assert.strictEqual(solution1(gameLine), 95);
  });
  it('should return the zero if no games exceed maximums', () => {
    const gameLine = 'Game 95: 16 blue, 1 green; 3 red, 11 green; 4 blue';
    assert.strictEqual(solution1(gameLine), 0);
  });
});

describe('Part 2', () => {
  it('should return the product of min values for RGB', () => {
    const gameLine = 'Game 95: 6 blue, 1 green; 3 red, 11 green; 4 blue';
    assert.strictEqual(solution2(gameLine), 198);
  });
});