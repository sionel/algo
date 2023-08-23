
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().replaceAll('\r', '').trim().split("\n")

const [r, c] = input[0].split(' ').map(Number)
const map = []
for (let i = 1; i <= r; i++) {
  map.push(input[i].split(''))
}
const set = new Set()
let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];
let answer = 0
const dfs = (x, y) => {

  answer = Math.max(answer, set.size)
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && nx < r && ny >= 0 && ny < c) {
      const now = map[nx][ny]
      if (!set.has(now)) {
        set.add(now)
        dfs(nx, ny)
        set.delete(now)
      }
    }
  }
}


set.add(map[0][0])
dfs(0, 0)
console.log(answer);