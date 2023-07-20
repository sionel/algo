const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map((e) => e.split(" ").map(Number));

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 }, () => 0)
);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    dp[i][j] =
      Math.max(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) +
      arr[i - 1][j - 1];
  }
}
console.log(dp[N][M]);
