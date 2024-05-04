const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const toIdx = {};
for (let i = 0; i <= 9; i++) {
  toIdx[i] = Math.pow(2, i);
}

const N = Number(input[0]);
let prevDp = {};
for (let i = 0; i <= 9; i++) {
  prevDp[i] = Array(1024).fill(0);
  prevDp[i][toIdx[i]] = 1;
}
prevDp[0][toIdx[0]] = 0;

for (let i = 2; i <= N; i++) {
  const dp = {};
  for (let j = 0; j <= 9; j++) {
    dp[j] = Array(1024).fill(0);
  }
  for (let num = 0; num <= 9; num++) {
    for (let j = 0; j < 1024; j++) {
      dp[num][j | toIdx[num]] =
        (dp[num][j | toIdx[num]] + (prevDp[num - 1]?.[j] ?? 0)) % 1000000000;
      dp[num][j | toIdx[num]] =
        (dp[num][j | toIdx[num]] + (prevDp[num + 1]?.[j] ?? 0)) % 1000000000;
    }
  }
  prevDp = dp;
}

let sum = 0;
for (let i = 0; i <= 9; i++) {
  sum = (sum + prevDp[i][1023]) % 1000000000;
}

console.log(sum);
