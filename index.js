const fs = require('fs');
console.log('Advent of Code 2023');
console.log('===================\n');
const args = process.argv.slice(2);
const day = args[0];
const part = args[1];
console.log(`Running day ${day} part ${part}`);

const solution = require(`./day-${day}/part${part}`);

const input = fs.readFileSync(`./day-${day}/input.txt`, 'utf8');

const answer = solution(input);

console.log(`The solution is ${answer}`);
