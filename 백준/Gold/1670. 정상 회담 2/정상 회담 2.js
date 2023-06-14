
let n1
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  n1 = Number(line)
  reader.close();
  
});
reader.on('close', () => {
  console.log(solution(n1))
  process.exit();
});

const solution = (n) => {
  const dp = Array(n+1).fill(BigInt(0))
  dp[0] = BigInt(1)
  dp[2] = BigInt(1)

  for(let i = 4 ; i <= n; i+=2){
    for(let j = 0 ; j <= i-2 ; j+=2){
      dp[i] += dp[j] * dp[i-j-2]
      dp[i] %= BigInt(987654321)
    }
  }
  return parseInt(dp[n])
}