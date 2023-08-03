const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0])
const dp = Array(1500001).fill(0)
let max = 0
for (let i = 1; i <= n; i++) {
  max = Math.max(max, dp[i - 1])
  const [day, cost] = input[i].split(' ').map(Number)
  dp[i - 1 + day] = Math.max(max + cost, dp[i - 1 + day])
}
max = Math.max(max, dp[n])

console.log(max);