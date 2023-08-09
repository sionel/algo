const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(' ').map(Number)

const map = Array.from({ length: n + 1 }, (_, i) => Array.from({ length: n + 1 }, (_, j) => i === j ? 0 : Infinity))

for (let i = 1; i <= m; i++) {
  const [start, end] = input[i].split(' ').map(Number)
  map[start][end] = 2
  map[end][start] = 2
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      map[i][j] = Math.min(map[i][j], map[i][k] + map[k][j])
    }
  }
}


let result = [0, 0, Infinity]
for (let i = 1; i <= n; i++) {
  for (let j = i + 1; j <= n; j++) {
    let temp = 0
    for (let k = 1; k <= n; k++) {
      temp += Math.min(map[i][k], map[j][k])
    }
    if (result[2] > temp) {
      result[0] = i
      result[1] = j
      result[2] = temp
    }
  }
}

console.log(result.join(' '));