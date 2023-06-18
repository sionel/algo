let num = 0
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  num = Number(line)
  reader.close()
});
reader.on('close', () => {
  solution(num)
  process.exit();
});

const solution = (num) => {
  const _125 = Math.floor(num/ 125)
  const _25 = Math.floor(num/ 25)
  const _5 = Math.floor(num/ 5)
  console.log(_125+_25+_5);
}