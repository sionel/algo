const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let n = input.shift()
let arr = [...input]

const dp = Array.from({ length: n }, () => Array.from({ length: 2 }), () => 0)
dp[0][0] = arr[0]
dp[0][1] = 0
if (n === 1) console.log(arr[0]);
else {
  dp[1][0] = arr[0] + arr[1]
  dp[1][1] = arr[1]

  for (let i = 2; i < n; i++) {
    dp[i][0] = dp[i - 1][1] + arr[i]
    dp[i][1] = Math.max(dp[i - 2][1] + arr[i], dp[i - 2][0] + arr[i])
  }
  console.log(Math.max(...dp[n - 1]));
}
