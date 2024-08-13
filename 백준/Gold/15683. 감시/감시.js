const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let map = [];
const cctv = [];
for (let i = 1; i <= n ; i++) {
  map.push(
    input[i].split(" ").map((e, j) => {
      if (e === "0" || e === "6") return Number(e);
      else {
        cctv.push([i - 1, j]);
        return Number(e);
      }
    })
  );
}

const cctvDir = [
  [],
  [[0], [1], [2], [3]],
  [[0, 2], [1, 3]],
  [[0, 1], [1, 2], [2, 3], [3, 0]],
  [[0, 1, 2], [1, 2, 3], [2, 3, 0], [3, 0, 1]],
  [[0, 1, 2, 3]],
];

let min = Infinity;
const cctvLen = cctv.length;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const check = (x, y, dir) => {
  let nx = x;
  let ny = y;
  while (true) {
    nx += dx[dir];
    ny += dy[dir];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m || map[nx][ny] === 6) break;
    if (map[nx][ny] === 0) map[nx][ny] = "#";
  }
}

const dfs = (idx) => {
  if (idx === cctvLen) {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (map[i][j] === 0) cnt++;
      }
    }
    min = Math.min(min, cnt);
    return;
  }

  const [x, y] = cctv[idx];
  const num = map[x][y];
  for (let i = 0; i < cctvDir[num].length; i++) {
    const copyMap = map.map((e) => e.slice());
    for (let j = 0; j < cctvDir[num][i].length; j++) {
      check(x, y, cctvDir[num][i][j]);
    }
    dfs(idx + 1);
    map = copyMap.map((e) => e.slice());
  }
}

dfs(0);
console.log(min);

