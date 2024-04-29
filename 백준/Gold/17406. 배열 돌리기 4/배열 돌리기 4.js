const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().replaceAll('\r', '').split('\n')

const [n, m, k] = input[0].split(' ').map(Number);
const map = []
for (let i = 1; i <= n; i++) {
  map.push(input[i].split(' ').map(Number))
}

let min = Infinity

const check = Array(k).fill(false)
const rotateArr = []

for (let i = n + 1; i <= n + k; i++) {
  rotateArr.push(input[i].split(' ').map(Number))
}

const rotate = (r, c, s, recovery) => {
  if (recovery) {
    for (let i = 1; i <= s; i++) {
      let temp = map[r - i][c - i]
      for (let j = c - i; j < c + i; j++) {
        map[r - i][j] = map[r - i][j + 1]
      }
      for (let j = r - i; j < r + i; j++) {
        map[j][c + i] = map[j + 1][c + i]
      }
      for (let j = c + i; j > c - i; j--) {
        map[r + i][j] = map[r + i][j - 1]
      }
      for (let j = r + i; j > r - i; j--) {
        map[j][c - i] = map[j - 1][c - i]
      }
      map[r - i + 1][c - i] = temp
    }
  } else {
    for (let i = 1; i <= s; i++) {
      let temp = map[r - i][c - i]
      for (let j = r - i; j < r + i; j++) {
        map[j][c - i] = map[j + 1][c - i]
      }
      for (let j = c - i; j < c + i; j++) {
        map[r + i][j] = map[r + i][j + 1]
      }
      for (let j = r + i; j > r - i; j--) {
        map[j][c + i] = map[j - 1][c + i]
      }
      for (let j = c + i; j > c - i; j--) {
        map[r - i][j] = map[r - i][j - 1]
      }
      map[r - i][c - i + 1] = temp
    }
  }
}


const dfs = (n) => {
  if (n === k) {
    const temp = map.map(e => e.reduce((acc, cur) => acc + cur, 0))
    min = Math.min(...temp, min)
  } else {

    for (let i = 0; i < k; i++) {
      if (check[i]) continue
      check[i] = true
      rotate(rotateArr[i][0] - 1, rotateArr[i][1] - 1, rotateArr[i][2], false)
      dfs(n + 1)
      rotate(rotateArr[i][0] - 1, rotateArr[i][1] - 1, rotateArr[i][2], true)
      check[i] = false
    }
  }
}

dfs(0)
console.log(min)
