const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0])
const brokenCount = Number(input[1])
const brokens = input[2]
  ? input[2]
    .split(' ')
    .reduce((acc, v) => {
      acc[v] = true;
      return acc;
    }, {})
  : {};
let min = Infinity

for (let i = 0; i <= 1000000; i++) {
  const str = String(i)
  let flag = true
  for (let j = 0; j < str.length; j++) {
    if (brokens[str[j]]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    min = Math.min(min, Math.abs(i - n) + str.length);
  }
}

console.log(Math.min(min, Math.abs(100 - n)));