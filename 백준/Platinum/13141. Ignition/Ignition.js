const fs = require("fs");
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [nodeCount, lineCount] = input[0].split(' ').map((e)=>Number(e))

const arr = Array.from({ length: nodeCount+1 }, (_, i) => Array.from({ length: nodeCount+1 }, (_, j) => i === j ? 0 : Infinity))
let answer = Infinity
for (let i = 1; i < input.length; i++) {
  const [start, end, cost] = input[i].split(' ').map(e => Number(e))
  arr[start][end] = Math.min(arr[start][end], cost)
  arr[end][start] = Math.min(arr[end][start], cost)
}
for (let visit = 1; visit <= nodeCount; visit++) {
  for (let end = 1; end <= nodeCount; end++) {
    for (let start = 1; start <= nodeCount; start++) {
      if (start === end) continue;
      arr[start][end] = Math.min(arr[start][end], arr[start][visit] + arr[visit][end])
      arr[end][start] = Math.min(arr[end][start], arr[end][visit] + arr[visit][start])
    }
  }
}

for (let start = 1; start <= nodeCount; start++) {
  let  totalCost= 0
  for (let index = 1; index < input.length; index++) {
    const [lineStart, lineEnd, cost] = input[index].split(' ').map(e => Number(e))
    totalCost = Math.max(totalCost, (arr[start][lineStart] + arr[start][lineEnd] + cost) / 2)
  }
  answer = Math.min(answer, totalCost)
}

console.log(answer.toFixed(1));