const fs = require('fs');
const solution2 = require('./solution2');

const input = fs.readFileSync('input.txt', 'utf8');

const answer = solution2(input);

console.log(`The solution is ${answer}`);
