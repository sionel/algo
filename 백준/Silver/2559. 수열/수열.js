const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number)
const arr = input.shift().split(' ').map(Number)
let sum = arr.slice(0, m).reduce((acc, curnt) => acc + curnt, 0);

let max = sum
let value = sum
for (let i = 0; i < n - m; i++) {
  value += arr[i+m] - arr[i]
  max = Math.max(max, value)
}

console.log(max);