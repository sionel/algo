const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
const arr = input.slice(1).map((n) => Number(n));
const max = 1000000
const dp = Array(max + 1).fill(0);
dp[0] = 0;

for (let i = 1; i <= max; i++) {
  let j = 1;
  for (let j = 1; i * j <= 1000000; j++) {
    dp[i * j] += i;
  }
  dp[i] += dp[i - 1];
}

const result = arr.map((n) => dp[n]);

console.log(result.join("\n"));