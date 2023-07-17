const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
const [count, cases] = input().split(' ').map(Number)
const sum = Array(count + 1).fill(0)
const arr = input().split(' ').map(Number)

for (let i = 1; i <= count; i++) {
  sum[i] = sum[i - 1] + arr[i - 1]
}
let result = []
for (let i = 0; i < cases; i++) {
  const [start, end] = input().split(' ').map(Number)
  result.push(sum[end] - sum[start - 1]);
}
console.log(result.join('\n'));