const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift())
const m = Number(input.shift())

const arr = []
for (let i = 0; i < n; i++) {
  arr.push(input.shift().split(' ').map(Number))
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        arr[i][j] = 1
        arr[j][i] = 1
      } else {
        arr[i][j] = arr[i][j] || arr[j][i] || arr[i][k] && arr[k][j]
        arr[j][i] = arr[i][j]
      }
    }
  }
}

const visit = input[0].split(' ').map(Number)
const any = visit[0] -1

let flag = true
for (let i = 0; i < m; i++) {
  if (arr[any][visit[i] - 1]) continue
  else {
    flag = false
    break
  }
}
console.log(flag ? "YES" : "NO");
