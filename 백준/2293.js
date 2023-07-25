const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().trim().split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();

const [N, K] = input().split(" ").map(Number);

const dp = Array.from({ length: 10101 }, () => 0);
dp[0] = 1;
const coins = [];
for (let i = 0; i < N; i++) {
  const num = Number(input());
  coins.push(num);
}

for (let j = 0; j < N; j++) {
  for (let i = 0; i < K; i++) {
    dp[i + coins[j]] += dp[i];
  }
}

console.log(dp[K]);
