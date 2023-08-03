const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number)
const arr = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity))
for (let i = 0; i < m; i++) {
  const [x, y, c] = input[i].replace('\r', '').split(' ').map(Number)
  arr[x - 1][y - 1] = c
}
for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = Math.min(arr[i][j], arr[i][k] + arr[k][j])
    }
  }
}
let min = Infinity
for (let i = 0; i < n; i++) {
  min = Math.min(min, arr[i][i])
}
console.log(min === Infinity ? -1 : min);