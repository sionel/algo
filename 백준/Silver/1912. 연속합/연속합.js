const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)

const dp = new Array(n+1).fill(0)
dp[0] = -Infinity
for(let i = 1 ; i <= n ; i++){
  dp[i] = Math.max(dp[i-1]+arr[i-1] , arr[i-1])
}
console.log(Math.max(...dp));