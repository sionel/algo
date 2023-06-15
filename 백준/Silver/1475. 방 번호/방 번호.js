
let n = 0 
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  n = line
  reader.close()
});
reader.on('close', () => {
  solution(n)
  process.exit();
});

const solution = (n) => {
  const arr = Array(10).fill(0)
  const temp = [...n]
  let max = 0
  temp.forEach(e=>{
    if(e === '6' || e === '9'){
      arr[6]++
      max = Math.max(max,Math.ceil(arr[6]/2))
    }else {
      arr[+e]++
      max = Math.max(max,arr[e])
    }
  })
  console.log(max)
}