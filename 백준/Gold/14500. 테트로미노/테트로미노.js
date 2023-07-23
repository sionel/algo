const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split('\n');


let [N, M] = input.shift().split(' ').map(Number)
const paper = input.map(e => e.split(' ').map(Number))
const visit = Array.from({ length: N }, () => Array.from({ length: M }, () => false))
let max = 0

const dfs = (x, y, cost, depth) => {
  if (depth === 3) {
    max = Math.max(max, cost)
    return
  }
  if (x + 1 < N && !visit[x + 1][y]) {
    visit[x + 1][y] = true
    dfs(x + 1, y, cost + paper[x + 1][y], depth + 1)
    visit[x + 1][y] = false
  }
  if (x - 1 >= 0 && !visit[x - 1][y]) {
    visit[x - 1][y] = true
    dfs(x - 1, y, cost + paper[x - 1][y], depth + 1)
    visit[x - 1][y] = false
  }
  if (y + 1 < M && !visit[x][y + 1]) {
    visit[x][y + 1] = true
    dfs(x, y + 1, cost + paper[x][y + 1], depth + 1)
    visit[x][y + 1] = false
  }
  if (y - 1 >= 0 && !visit[x][y - 1]) {
    visit[x][y - 1] = true
    dfs(x, y - 1, cost + paper[x][y - 1], depth + 1)
    visit[x][y - 1] = false
  }
}
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visit[i][j] = true
    dfs(i, j, paper[i][j], 0)
    visit[i][j] = false
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (i >= 1 && i < N - 1 && j >= 1) {
      max = Math.max(max, paper[i][j] + paper[i - 1][j] + paper[i + 1][j] + paper[i][j - 1])
    }
    if (i >= 1 && i < N - 1 && j < M - 1) {
      max = Math.max(max, paper[i][j] + paper[i - 1][j] + paper[i + 1][j] + paper[i][j + 1])
    }
    if (i >= 1 && j < M - 1 && j >= 1) {
      max = Math.max(max, paper[i][j] + paper[i - 1][j] + paper[i][j + 1] + paper[i][j - 1])
    }
    if (i < N - 1 && j < M - 1 && j >= 1) {
      max = Math.max(max, paper[i][j] + paper[i + 1][j] + paper[i][j + 1] + paper[i][j - 1])
    }
  }
}



console.log(max);