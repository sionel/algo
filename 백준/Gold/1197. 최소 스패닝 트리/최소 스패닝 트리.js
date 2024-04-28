const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')

// const n = Number(input[0])
const [v, e] = input[0].split(' ').map(Number)
const tree = Array.from({length: v+1}, (_,i) => i)

const lines = input.slice(1).map(v => v.split(' ').map(Number))

const union = (a,b) => {
    const x = find(a)
    const y = find(b)
    if(x !== y) tree[y] = x
}
const find = (a) => {
    if(tree[a] === a) return a
    return tree[a] = find(tree[a])
}

lines.sort((a,b)=>a[2]-b[2])

let result = 0

for(let i = 0 ; i < e ; i++){
  const [s,e,c] = lines[i]
  if(find(s) !== find(e)){
    result += c
    union(s,e)
  }
}
console.log(result)