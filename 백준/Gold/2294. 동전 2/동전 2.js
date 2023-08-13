const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input.shift().split(" ").map(Number);
const coin = [...new Set(input.map(Number))];

const dp = new Array(10001).fill(Infinity);
dp[0] = 0;
coin.forEach((v) => {
  for (let i = v; i <= k; i++) {
    dp[i] = Math.min(dp[i], dp[i - v] + 1);
  }
});
console.log(dp[k] == Infinity ? -1 : dp[k]);
