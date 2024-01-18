const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  solution(line)
  reader.close()

});
reader.on('close', () => {
  // solution(answers)
  process.exit();
});

const solution = (line) => {
  console.log(line === '1 2 3 4 5 6 7 8' ? 'ascending' : line === '8 7 6 5 4 3 2 1' ? 'descending' : 'mixed');
}