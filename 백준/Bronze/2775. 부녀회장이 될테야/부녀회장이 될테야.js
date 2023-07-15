const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().trim().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
let cases = Number(input())
let dp = Array.from({ length: 15 }, () => Array(15).fill(0))

for (let i = 0; i < cases; i++) {
  const floor = Number(input())
  const room = Number(input())
  for (let j = 0; j <= floor; j++) {
    for (let k = 0; k <= room; k++) {
      if (j === 0) dp[j][k] = k
      else if (k === 0) dp[j][k] = 0
      else dp[j][k] = dp[j][k - 1] + dp[j - 1][k]
    }
  }
  console.log(dp[floor][room])
}