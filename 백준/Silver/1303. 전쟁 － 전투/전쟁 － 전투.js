const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const [M, N] = input.shift().split(' ').map(Number)
const check = Array.from({ length: N }, () => Array(M).fill(false))

const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
const board = input.map(e => e.replace('\r', '').split(''))
let wPower = 0, bPower = 0

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    let wQueue = [], bQueue = []
    let index = 0
    if (board[i][j] === 'W' && !check[i][j]) {
      check[i][j] = true
      wQueue.push([i, j])
      index = 0
      while (wQueue.length !== index) {
        const [px, py] = wQueue[index++]
        for (let k = 0; k < 4; k++) {
          const [mx, my] = [px + dir[k][0], py + dir[k][1]]
          if (mx < 0 || my < 0 || mx >= N || my >= M || board[mx][my] !== 'W' || check[mx][my]) continue
          check[mx][my] = true
          wQueue.push([mx, my])
        }
      }
      wPower += Math.pow(wQueue.length, 2)
    }
    else if (board[i][j] === 'B' && !check[i][j]) {
      check[i][j] = true
      bQueue.push([i, j])
      index = 0
      while (bQueue.length !== index) {
        const [px, py] = bQueue[index++]
        for (let k = 0; k < 4; k++) {
          const [mx, my] = [px + dir[k][0], py + dir[k][1]]
          if (mx < 0 || my < 0 || mx >= N || my >= M || board[mx][my] !== 'B' || check[mx][my]) continue
          check[mx][my] = true
          bQueue.push([mx, my])
        }
      }
      bPower += Math.pow(bQueue.length, 2)
    }
  }
}

console.log(wPower , bPower);