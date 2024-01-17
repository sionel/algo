const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs
    .readFileSync(filePath)
    .toString()
    .replaceAll("\r", "")
    .split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();

let [n, m, v] = input().split(' ').map(Number)

const dfsMap = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0))
const bfsMap = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0))

for (let i = 0; i < m; i++) {
  const [x, y] = input().split(' ').map(Number)

  dfsMap[x][y] = 1
  dfsMap[y][x] = 1

  bfsMap[x][y] = 1
  bfsMap[y][x] = 1
}
const result = [new Set(), new Set()]
const dfs = (target) => {
  result[0].add(target)
  for (let i = 0; i <= n; i++) {
    if (dfsMap[target][i] && !result[0].has(i)) {
      dfs(i)
    }
  }
}
dfs(v)


const bfs = (target) => {
  const queue = [target]
  let idx = 0
  while (queue.length !== idx) {
    const current = queue[idx++]
    result[1].add(current)
    for(let i = 0 ; i <= n ; i++){
      if(bfsMap[current][i] && !result[1].has(i)){
        queue.push(i)
      }
    }
  }

}
bfs(v)

console.log(result.map(e=>[...e].join(' ')).join('\n'));