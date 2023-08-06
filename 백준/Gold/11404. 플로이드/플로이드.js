const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const n = Number(input[0])
const lineCount = Number(input[1])
const map = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => i === j ? 0 : Infinity))

for (let i = 0; i < lineCount; i++) {
  const [s, e, c] = input[i + 2].split(' ').map(Number)
  map[s - 1][e - 1] = Math.min(map[s - 1][e - 1], c)
}


for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map[i][j] = Math.min(map[i][j], map[i][k] + map[k][j])
    }
  }
}

console.log(map.map(e => e.map(e => e === Infinity ? 0 : e).join(' ')).join('\n'));
