const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const number = input.shift()

const arr = input.map(e => e.split(' ').map(Number))
let result = []
for (let i = 0; i < arr.length; i++) {
  let rank = 1
  for (let j = 0; j < arr.length; j++) {
    if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1])
      rank++
  }
  result.push(rank)
}
console.log(result.join(' '));