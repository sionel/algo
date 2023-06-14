let num , arr
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  if(!num){
    num = Number(line)
  }
  else {
    arr = line.split(' ').map(e => Number(e))
    reader.close();
  }
});
reader.on('close', () => {
  console.log(solution(arr))
  process.exit();
});

const solution = (numbers) => {
  const dp = Array.from({length:numbers.length},()=>0)
  dp[0] = 1
  
  for(let i = 1 ; i < numbers.length ; i++){
    let max = 0
    for(let j = i-1 ; j >= max ; j--){
      if(numbers[i] > numbers[j]){
        max = Math.max(dp[j] , max)
      }
    }
    dp[i] = max + 1
  }
  return Math.max(...dp)
}