const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim()

const num = Number(input)

const dp = Array(num +1).fill(0)
dp[0] = 0
dp[1] = 1
dp[2] = 3
for (let i = 3; i <= num; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]*2) % 10007
}

console.log(dp[num]);