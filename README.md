# Advent of Code 2023

This repository contains my solutions for the [Advent of Code 2023](https://adventofcode.com/2023) puzzles, implemented in Node.js.

Each day's puzzles are structured in separate folders, and automated testing is integrated using Mocha.

### Repository Structure

- Each day's puzzle solution is located in its own directory, e.g. `day-01/part1.js`, `day-02/part2.js`
- Puzzle inputs are provided in `input.txt` files within each day's directory
- Test cases for each solution are written using Mocha and can be found alongside the puzzle solutions
- index.js is used for running specific day and part

### Running solutions
To run the solution for a particular day, edit `package.json` `start` script like this:

`"start": "node index.js 02 2"` for day 02, part 2

Then `npm run start` from the root folder of the application

### Testing
To run tests for all solutions, type `npm run test`


### Acknowledgments
Thanks to Eric Wastl for creating the Advent of Code.

[![Build Status](https://github.com/hanleymark/advent-of-code-2023/workflows/build/badge.svg)](https://github.com/hanleymark/advent-of-code-2023/actions)

[![Completion Status](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/hanleymark/advent-of-code-2023/main/.github/badges/progress.json)](https://github.com/hanleymark/advent-of-code-2023)
