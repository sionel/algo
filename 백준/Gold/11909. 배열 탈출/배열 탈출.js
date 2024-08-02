const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .split("\n");

const n = Number(input[0]);
const map = [];
for (let i = 1; i <= n; i++) {
  map.push(input[i].split(" ").map(Number));
}
const dp = Array.from(Array(n), () => Array(n).fill(0));
dp[0][0] = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0 && j === 0) continue;
    if (i === 0) {
      dp[i][j] =
        dp[i][j - 1] +
        (map[i][j - 1] > map[i][j] ? 0 : map[i][j] - map[i][j - 1] + 1);
    } else if (j === 0) {
      dp[i][j] =
        dp[i - 1][j] +
        (map[i - 1][j] > map[i][j] ? 0 : map[i][j] - map[i - 1][j] + 1);
    } else {
      const dpi =
        dp[i - 1][j] +
        (map[i - 1][j] > map[i][j] ? 0 : map[i][j] - map[i - 1][j] + 1);
      const dpj =
        dp[i][j - 1] +
        (map[i][j - 1] > map[i][j] ? 0 : map[i][j] - map[i][j - 1] + 1);
      dp[i][j] = Math.min(dpi, dpj);
    }
  }
}

console.log(dp[n - 1][n - 1]);
