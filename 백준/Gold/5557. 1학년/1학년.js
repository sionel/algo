const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const dp = Array.from({ length: n - 1 }, () =>
  Array.from({ length: 21 }, () => 0n)
);

dp[0][arr[0]] = 1n;
for (let i = 1; i < n - 1; i++) {
  for (let j = 0; j < 21; j++) {
    if (dp[i - 1][j]) {
      if (j + arr[i] <= 20) {
        dp[i][j + arr[i]] += dp[i - 1][j];
      }
      if (j - arr[i] >= 0) {
        dp[i][j - arr[i]] += dp[i - 1][j];
      }
    }
  }
}

console.log(dp[n - 2][arr[n - 1]] + "");
