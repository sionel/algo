const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
const cases = Number(input())
const dp = Array(11).fill(0)
dp[0] = 0
dp[1] = 1
dp[2] = 2
dp[3] = 4

const sol = (n) => {
  if (dp[n]) return dp[n]
  else {
    let value = 0
    for (let i = 1; i < n; i++) {
      value += sol(i) + sol(n - i)
    }
    dp[n] = value
    return dp[n]
  }
}


for (let i = 0; i < cases; i++) {
  const num = Number(input())
  for (let j = 4; j <= num; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3]
  }
  console.log(dp[num]);
}