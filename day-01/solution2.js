// Advent of code Day 1 Solution 2

const digitise = (string) =>
  string
    .replace(/one/g, 'o1e')
    .replace(/two/g, 't2o')
    .replace(/three/g, 't3e')
    .replace(/four/g, 'f4r')
    .replace(/five/g, 'f5e')
    .replace(/six/g, 's6x')
    .replace(/seven/g, 's7n')
    .replace(/eight/g, 'e8t')
    .replace(/nine/g, 'n9e')
    .replace(/zero/g, 'z0o');

module.exports = (input) => {
  const lines = input.split('\n');

  let total = 0;

  lines.forEach((line) => {
    const digitised = digitise(line);
    const digits = digitised.match(/[0-9]/g);
    const firstLast = `${digits[0]}${digits[digits.length - 1]}`;
    total += parseInt(firstLast);
  });

  return total;
};
