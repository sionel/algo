const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().replaceAll('\r', '').trim().split("\n")

let n = Number(input.shift())

const nodes = {}
const diameter = Array(n).fill(0)
for (let i = 0; i < n; i++) {
  const line = input[i].split(' ').map(Number)
  let node = 0
  for (let j = 0; j < line.length; j++) {
    if (j === 0) {
      node = line[j]
    } else if (line[j] === -1) {
      break
    } else {
      nodes[node] = nodes[node] || []
      nodes[node].push([line[j], line[++j]])
    }
  }
}
const dfs = (parent, now) => {
  const children = nodes[now]
  if (children.length === 1 && now !== 1) {
    return 0
  }
  const lines = [0]
  for (let i = 0; i < children.length; i++) {
    const [child, cost] = children[i]
    if (child === parent) continue
    lines.push(dfs(now, child) + cost)
  }
  lines.sort((a, b) => b - a)
  diameter[now] = lines[0] + lines[1]
  return lines[0]
}

dfs(0, 1)
console.log(Math.max(...diameter));