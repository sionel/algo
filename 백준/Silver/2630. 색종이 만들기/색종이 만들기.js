const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split('\n');
const n = Number(input.shift())
const board = input.map(e => e.split(' ').map(Number))

let b = 0
let w = 0
let piece = n

const slice = (n, x, y) => {
  const color = board[x][y]
  let flag = false
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (color !== board[i][j]) {
        flag = true
        break
      }
    }
    if (flag) break
  }

  if (flag) {
    const half = n >> 1
    slice(half, x, y)
    slice(half, x + half, y)
    slice(half, x, y + half)
    slice(half, x + half, y + half)
  } else {
    if (board[x][y] === 1) b++
    else w++
  }
}
slice(n, 0, 0)
console.log(w);
console.log(b);