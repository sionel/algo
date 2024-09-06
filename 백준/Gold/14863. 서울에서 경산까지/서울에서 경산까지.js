
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);
const dp = Array.from({ length: N }, () => Array(100001).fill(-1));
const pt = [];
const pr = [];
for (let i = 1; i < input.length; i++) {
  const [a, b, c, d] = input[i].split(" ").map(Number);
  pt.push([a, c]);
  pr.push([b, d]);
} 
function sol(n, k) {
  if (k > K) return -Infinity;
  if (n === N) return 0;
  let result = dp[n][k];
  if (result !== -1) return result;
  result = Math.max(sol(n + 1, k + pt[n][0]) + pr[n][0], sol(n + 1, k + pt[n][1]) + pr[n][1]);
  return result;
}
console.log(sol(0, 0));