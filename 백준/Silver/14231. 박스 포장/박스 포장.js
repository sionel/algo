const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const dp = Array(n).fill(1);
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    if (arr[j] > arr[i]) {
      dp[j] = Math.max(dp[j], dp[i] + 1);
    }
  }
}
console.log(Math.max(...dp));
