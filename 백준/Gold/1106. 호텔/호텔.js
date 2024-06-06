const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const inputs = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");

const [C, N] = inputs[0].split(" ").map(Number);
const arr = inputs.slice(1).map((str) => str.split(" ").map(Number));
const MAX = 1098;

const dp = Array(MAX).fill(Infinity);
dp[0] = 0;

for (let i = 1; i < dp.length; i++) {
  let min = Infinity;
  for (const [cost, cnt] of arr) {
    const prevIdx = i - cnt;
    if (prevIdx >= 0) min = Math.min(min, dp[prevIdx] + cost);
  }
  dp[i] = min;
}
const greaterThanC = arr.filter(([, cnt]) => cnt > 1000).map(([cost]) => cost);
console.log(Math.min(...dp.slice(C), ...greaterThanC));
