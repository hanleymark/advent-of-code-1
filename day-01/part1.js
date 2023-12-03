// Advent of code Day 1 Solution 1

module.exports = (input) => {
  const lines = input.split('\n');

  let total = 0;

  lines.forEach((line) => {
    const digits = line.match(/[0-9]/g);
    const firstLast = `${digits[0]}${digits[digits.length - 1]}`;
    total += parseInt(firstLast);
  });

  return total;
};
