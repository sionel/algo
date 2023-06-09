process.stdin.resume();
process.stdin.setEncoding('utf8');

let n = 0
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  n = line
  reader.close();
});
reader.on('close', () => {
  console.log(solution(Number(n)));
  process.exit();
});


const solution = (n) => {
  let result = 0
  const arr = Array(n)
  const check = (row) => {
    for(let i = 0 ; i < row ; i++){
      if(arr[row] === arr[i] || Math.abs(row-i) === Math.abs(arr[row] - arr[i])) return false
    }
    return true
  }
  const search = (row) => {
    if(row === n) {
      result++
      return
    }
    for(let col = 0 ; col < n ; col++){
      arr[row] = col
      if(check(row)){
        search(row+1)
      }
    }
  }
  
  search(0)
  
  return result
}