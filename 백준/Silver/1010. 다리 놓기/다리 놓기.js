const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replace("\r", "")
  .split("\n");

let n = Number(input[0]);
const result = [];
const dp = Array.from({ length: 30 }, () => Array(30).fill(0));
for (let i = 1; i < 30; i++) {
  for (let j = i; j < 30; j++) {
    if (i === 1) dp[i][j] = j;
    else dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
  }
}
let idx = 0;
while (idx++ !== n) {
  const [a, b] = input[idx].split(" ").map(Number);
  result.push(dp[a][b]);
}

console.log(result.join("\n"));
