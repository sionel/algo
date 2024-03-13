const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const n = Number(input[0])
const arr = [...new Set(input[1].split(' ').map(Number))].sort((a, b) => a - b)
let result = "No"
for(let i = 0; i < arr.length-2; i++) {
  const temp = new Set(arr)
  temp.add(arr[i]+3)
  temp.add(arr[i]+6)  
  if(temp.size === arr.length) {
    result = "Yes"
    break
  }
}
console.log(result);