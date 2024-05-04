const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");

const n = Number(input[0]);
let dp = Array(10).fill(1n);

for (let i = 2; i <= n; i++) {
  const temp = Array(10).fill(0n);
  temp[0] = dp[1];
  temp[9] = dp[8];
  for (let j = 1; j < 9; j++) {
    temp[j] = dp[j - 1] + dp[j + 1] + temp[j];
  }
  dp = [...temp];
}
console.log(Number((dp.reduce((acc, cur) => acc + cur) - dp[0]) % 1000000000n));
