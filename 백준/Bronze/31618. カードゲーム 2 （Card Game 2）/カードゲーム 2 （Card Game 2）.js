const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

// const n = Number(input[0])
const arr = new Set(input[1].split(' ').map(Number))
const map = Array(200001).fill(false).map((_, i) => arr.has(i))
let result = "No"
for(let i = 0 ; i < map.length; i++){
  if(map[i] && map[i+3] && map[i+6]){
    result = "Yes"
    break
  }else if(map[i] && map[i+3]){
    map[i+3] = false
  }
}
console.log(result);