
let n = 0 
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  n = +line
  reader.close()
});
reader.on('close', () => {
  solution(n)
  process.exit();
});

const solution = (n) => {
  const dp = Array.from({length : n} ,()=>Array(3))
  dp[0][0] = 1
  dp[0][1] = 1
  dp[0][2] = 1

  for(let i = 1 ; i < n ; i++){
    dp[i][0] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2])%9901
    dp[i][1] = (dp[i-1][0] + dp[i-1][2])%9901
    dp[i][2] = (dp[i-1][0] + dp[i-1][1])%9901
  }
  console.log((dp[n-1][0]+dp[n-1][1]+dp[n-1][2])%9901)
}