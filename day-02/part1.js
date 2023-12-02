// Advent of code Day 2 Solution 1

module.exports = (input) => {
  let answer = 0;
  const redMax = 12;
  const greenMax = 13;
  const blueMax = 14;

  const lines = input.split('\n');
  lines.forEach((line) => {
    const gameNumber = parseInt(line.match(/Game\s+(\d+)/)[1]);
    let gameIsPossible = true;
    const gameData = line.match(/Game\s+\d+:\s*(.+)/)[1];
    const games = gameData.split(';');
    console.log(line);
    games.forEach((game) => {
      game = game.trim();
      const redMatch = game.match(/(\d+)\s+red/);
      const greenMatch = game.match(/(\d+)\s+green/);
      const blueMatch = game.match(/(\d+)\s+blue/);

      const red = redMatch ? redMatch[1] : 0;
      const green = greenMatch ? greenMatch[1] : 0;
      const blue = blueMatch ? blueMatch[1] : 0;

      if (red > redMax || green > greenMax || blue > blueMax) {
        gameIsPossible = false;
      }
    });
    if (gameIsPossible) {
      answer += gameNumber;
    }
    console.log(gameIsPossible ? 'POSSIBLE' : 'IMPOSSIBLE');
  });
  return answer;
};
