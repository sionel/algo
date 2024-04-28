const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const n = Number(input[0])
// const [v,e] = input[0].split(' ').map(Number)
const tree = Array.from({ length: n + 1 }, (_, i) => i)
const points = input.slice(1).map((v, i) => [...v.split(' ').map(Number), i + 1])
let result = 0

const union = (a, b) => {
  const x = find(a)
  const y = find(b)
  if (x !== y) tree[y] = x
}
const find = (a) => {
  if (tree[a] === a) return a
  return tree[a] = find(tree[a])
}

const lines = []

for (let i = 0; i < n - 1; i++) {
  for(let j = i+1 ; j < n ; j++){
    const p1 = points[i]
    const p2 = points[j]
    lines.push([p1[2], p2[2],Number(Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)))])
  }
}

lines.sort((a,b)=>a[2]-b[2])

for(let i = 0 ; i < lines.length ; i++){
  const [s,e,c] = lines[i]
  if(find(s) !== find(e)){
    result += c
    union(s,e)
  }
}
console.log(result)