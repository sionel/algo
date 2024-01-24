const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs
    .readFileSync(filePath)
    .toString()
    .replaceAll("\r", "")
    .split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();

let n = Number(input())
const map = []

for (let i = 0; i < n; i++) {
  map.push(input().split(' ').map(Number))
}

const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0n))
dp[0][0] = 1n

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === n - 1 && j === n - 1) break
    if (i + map[i][j] < n) {
      dp[i + map[i][j]][j] += dp[i][j]
    }
    if (j + map[i][j] < n) {
      dp[i][j + map[i][j]] += dp[i][j]
    }
  }
}

console.log(dp[n - 1][n - 1].toString())