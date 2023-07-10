const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().replace('\r', '').split('\n');
let count = Number(input.shift())
const times = input.map(e => e.split(' ').map(Number))

times.sort((a, b) =>
  a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]
)
let temp = 0
let result = 0
times.forEach(e => {
  const [start, end] = e
  if (temp <= start) {
    result++
    temp = end
  }
});
console.log(result);