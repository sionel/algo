const fs = require("fs");
// const input = (() => {
//   // const stdin = fs.readFileSync('./input.txt').toString().split('\n');
//   const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
//   let ln = 0;
//   return () => stdin[ln++];
// })();
const [N, K] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
const dp =  Array.from({length:N+1},(_,i)=>Array(i+1).fill(0))
dp[0][0] = 1
dp[1][0] = 1
dp[1][1] = 1
const sol = (n ,k) => {
  if(k < 0 || k > n) return 0
  if(dp[n][k]) return dp[n][k]
  else {
    dp[n][k] = sol(n-1,k-1) + sol(n-1, k)
    return dp[n][k]
  }
}
console.log(sol(N, K));