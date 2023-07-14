const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [number, arr] = input
let sum = 0
for (let i = 0; i < arr.length; i++) {
  let num = arr[i].charCodeAt() - 96
  sum += num * Math.pow(31, i)
}
console.log(sum);