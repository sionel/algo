
let n1 , n2=null, arr=[]
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  if(!n1) n1 = Number(line)
  else if(n2 === null){
    n2 = Number(line)
    if(n2 === 0) reader.close()
  }
  else {
    if(n2 !== 0){
      arr.push(Number(line))
      n2--
    }
    else reader.close();
  }
});
reader.on('close', () => {
  console.log(solution(n1,arr))
  process.exit();
});

const solution = (seat, arr) => {
  const dp = Array(seat+1 - arr.length).fill(0)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2
  for(let i = 3 ; i <= seat-arr.length ; i++){
    dp[i] = dp[i-1] + dp[i-2]
  }
  let cur = 0
  const gap = []
  for(let i = 0 ; i < arr.length ; i++){
    let value = arr[i]-cur-1
    cur = arr[i]
    gap.push(value)
  }
  gap.push(seat - (arr[arr.length-1] || 0))
  return gap.reduce((mul , cur)=>mul*dp[cur] || mul,1) || 1
}