const fs = require("fs");
//"./input.txt , /dev/stdin"
let input = fs.readFileSync('/dev/stdin').toString().trim()
input = Number(input)

const dp = Array(1000001).fill(Infinity)
let index = 1
dp[0]=0
dp[1]=0
while (true) {
  if(index === input) {
    console.log(dp[input]);
    break
  }
  dp[index + 1] = Math.min(dp[index] + 1, dp[index + 1])
  dp[index * 2] = Math.min(dp[index] + 1, dp[index * 2])
  dp[index * 3] = Math.min(dp[index] + 1, dp[index * 3])
  index++
}