const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const count = Number(input.shift())
const candidate = []
const students = Number(input.shift())
const arr = input.shift().split(' ').map(Number)
for (let i = 0; i < students; i++) {
  const index = candidate.findIndex(e => e[0] === arr[i])
  if (index === -1) {
    if (candidate.length === count) {
      candidate.shift()
    }
    candidate.push([arr[i], 1, i])
  } else {
    candidate[index][1]++
  }
  candidate.sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : a[2] - b[2])
  // console.log(candidate);
  // // 2 2 2 3 5 5 2 7 2 5 5 5 5 3
}
candidate.sort((a,b)=>a[0]-b[0])
console.log(candidate.map(e=>e[0]).join(' '));