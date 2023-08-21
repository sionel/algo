const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")

let n = Number(input.shift())
const map = {}
const diameter = Array.from({ length: n + 1 }, () => 0)

let index = 0
while (input[index]) {
  const [p, c, cost] = input[index++].split(' ').map(Number)
  map[p] = map[p] || []
  map[p].push([c, cost])
}


const dfs = (node) => {
  if (map[node]?.length) {
    let length = [0]
    for (let i = 0; i < map[node].length; i++) {
      const [child, cost] = map[node][i]
      length.push(dfs(child) + cost)
    }
    length.sort((a,b)=>b-a)
    diameter[node] = length[0] + length[1]
    return length[0]
  } else {
    return 0
  }
}

dfs(1)
console.log(Math.max(...diameter));