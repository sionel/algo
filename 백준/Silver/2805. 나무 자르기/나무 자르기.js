process.stdin.resume();
process.stdin.setEncoding('utf8');

let n = 0
let k = 0
let numbers = []

const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  if (n === 0) {
    [k, n] = line.split(' ').map(e => Number(e))
  } else {
    numbers = line.split(' ').map(e => Number(e))
    reader.close();
  }
});
reader.on('close', () => {
  console.log(solution(n, numbers))
  process.exit();
});

const solution = (n, numbers) => {
  numbers.sort((a, b) => b-a)
  let min = 0
  let max = numbers[0]
  let pivot = numbers[numbers.length-1]
  while(true){
    let log = 0 
    numbers.forEach(e=>{
      if(e-pivot > 0) log += e-pivot
    })
    if(log >= n){
      min = pivot
      pivot = parseInt((max+pivot)/2)
      if(min === pivot) return pivot
    }else if(log < n) {
      max = pivot
      pivot = parseInt((min+pivot)/2)
    }
  }
}