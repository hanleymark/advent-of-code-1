// Advent of code Day 2 Solution 2

module.exports = (input) => {
  let answer = 0;

  const lines = input.split('\n');
  lines.forEach((line) => {
    const gameData = line.match(/Game\s+\d+:\s*(.+)/)[1];
    const games = gameData.split(';');
    let redMin = 0;
    let greenMin = 0;
    let blueMin = 0;
    console.log(line);
    games.forEach((game) => {
      game = game.trim();
      const redMatch = game.match(/(\d+)\s+red/);
      const greenMatch = game.match(/(\d+)\s+green/);
      const blueMatch = game.match(/(\d+)\s+blue/);

      const red = redMatch ? parseInt(redMatch[1]) : 0;
      const green = greenMatch ? parseInt(greenMatch[1]) : 0;
      const blue = blueMatch ? parseInt(blueMatch[1]) : 0;

      redMin = red > redMin ? red : redMin;
      greenMin = green > greenMin ? green : greenMin;
      blueMin = blue > blueMin ? blue : blueMin;
    });
    const power = redMin * greenMin * blueMin;
    answer += power;
  });
  return answer;
};
