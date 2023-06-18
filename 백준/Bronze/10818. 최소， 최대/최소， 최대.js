let x = ''
let numArr = []
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  if(!x) x = line
  else {
    numArr = line.split(' ').map(e=>Number(e))
    reader.close()
  }
});
reader.on('close', () => {
  solution(numArr)
  process.exit();
});

const solution = (numArr) => {
  const [max, min ] = [Math.max(...numArr) , Math.min(...numArr)]
  console.log(min, max)
}