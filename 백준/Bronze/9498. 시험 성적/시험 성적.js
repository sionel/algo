let score= 0
let lines = []
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  score = Number(line)
  reader.close()
});
reader.on('close', () => {
  console.log(solution(score))
  process.exit();
});

const solution = (score) => score >= 90 ? 'A' : score>=80 ? 'B' : score>=70 ? 'C' :score>=60 ? 'D':'F'