const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input)
function solution(arr) {
  const nums = arr[1].split(' ').map(e=>Number(e))
  const eratos = eratosFunc()
  let answer = 0
  nums.forEach(e=>{
    if(eratos[e]) answer++
  })
  console.log(answer);
}


function eratosFunc() {
  const arr = Array(1001).fill(true)
  arr[0] = false
  arr[1] = false
  for(let i = 2 ; i*i < 1001 ; i++){
    if(arr[i]){
      for(let j = i*i ; j < 1001 ; j=j+i){
        arr[j] = false
      }
    }
  }
  return arr
}