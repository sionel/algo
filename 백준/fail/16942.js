// https://github.com/sionel/algo.git
const solution = (str) => {
  let max = 0
  let pivot = 0
  const arr = [...str]
  const set = new Set(arr)
  set.forEach((key)=>{
    let count = 0
    arr.forEach((value,j)=>{
      if(key === value){
        if((j-pivot) % 2 === 1 || !pivot){
          pivot = j
          count++
        }
      }
    })
    max = Math.max(max, count)
  })
  
  return max
}
console.log(solution("ABRACADABRAA"))

// let data = "";
// const reader = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// reader.on('line', (line) => {
//   data = line
//   reader.close();
// });
// reader.on('close', () => {
//   console.log(solution(data));
  
//   process.exit();
// });
