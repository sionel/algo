const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  const [num1, num2] = line.split(' ').map(e => Number(e))
  console.log(solution(num1, num2))
  reader.close();
});
reader.on('close', () => {
  process.exit();
});

const solution = (n, k) => {
  // const dp = Array.from({length:k+1},(_,i)=>i ===1 ?Array(n+1).fill(1) : Array(n+1).fill(0))
  const dp = Array.from({length:k+1},()=>Array(n+1).fill(0))
  for(let i = 0 ; i<=n ; i++){
    dp[1][i] = 1
  }
  for(let i = 1 ; i <= k ; i++){
    for(let j = 0; j <= n ; j++){
      for(let l = 0 ; l <= j ; l++){
        dp[i][j] = (dp[i-1][j-l] +dp[i][j]) % 1000000000
      }
    }
  }
  return dp[k][n]
}