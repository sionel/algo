const solution = (str) => {
  let max = 0
  let pivot = -1
  const arr = [...str]
  const set = new Set(arr)
  set.forEach((key)=>{
    let count = 0
    arr.forEach((value,j)=>{
      if(key === value){
        if(pivot === -1  || (j-pivot) % 2 === 1 ){
          pivot = j
          count++
        }
      }
    })
    pivot = -1
    max = Math.max(max, count)
  })
  
  return max
}
let data = "";
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  data = line
  reader.close();
});
reader.on('close', () => {
  console.log(solution(data));
  
  process.exit();
});