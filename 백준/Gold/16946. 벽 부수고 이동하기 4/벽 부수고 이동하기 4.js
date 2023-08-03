const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number)
const arr = []
for (let i = 0; i < n; i++) {
  arr.push(input[i].replace('\r', '').split('').map(Number))
}
const temp = Array.from({ length: n }, () => Array.from({ length: m }, () => 0))
const flood = [0]
let fill = 1


const bfs = (x, y) => {
  const queue = [[x, y]]
  let index = 0
  while (queue.length !== index) {
    const [dx, dy] = queue[index++]
    temp[dx][dy] = fill
    if (dx + 1 < n && arr[dx + 1][dy] === 0) {
      arr[dx + 1][dy] = 1
      queue.push([dx + 1, dy])
    }
    if (dy + 1 < m && arr[dx][dy + 1] === 0) {
      arr[dx][dy + 1] = 1
      queue.push([dx, dy + 1])
    }
    if (dx - 1 >= 0 && arr[dx - 1][dy] === 0) {
      arr[dx - 1][dy] = 1
      queue.push([dx - 1, dy])
    }
    if (dy - 1 >= 0 && arr[dx][dy - 1] === 0) {
      arr[dx][dy - 1] = 1
      queue.push([dx, dy - 1])
    }
  }
  return index
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === 0) {
      arr[i][j] = 1
      flood.push(bfs(i, j))
      fill++
    }
  }
}


let result = []
for (let i = 0; i < n; i++) {
  let str = ''
  for (let j = 0; j < m; j++) {
    if (temp[i][j] === 0) {
      const set = new Set()
      if (i + 1 < n) {
        set.add(temp[i + 1][j])
      }
      if (j + 1 < m) {
        set.add(temp[i][j + 1])
      }
      if (i - 1 >= 0) {
        set.add(temp[i - 1][j])
      }
      if (j - 1 >= 0) {
        set.add(temp[i][j - 1])
      }
      let cnt = 0
      set.forEach(e => cnt += flood[e])
      str += (cnt + 1) % 10
    }
    else str += '0'
  }
  result.push(str)
}
console.log(result.join('\n'));