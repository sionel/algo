const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, start] = input[0].split(" ").map(Number);
const map = [];

for (let i = 1; i < input.length; i++) {
  const row = input[i].split(" ").map(Number);
  map.push(row);
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] > map[i][k] + map[k][j]) {
        map[i][j] = map[i][k] + map[k][j];
      }
    }
  }
}
let answer = Infinity
const visited = Array(n).fill(0);
visited[start] = 1

const find = (cur , cost, cnt) => {
  if (n === cnt) {
    answer = Math.min(answer, cost);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      visited[i] = 1;
      find(i, cost + map[cur][i], cnt + 1);
      visited[i] = 0;
    }
  }
}

find(start, 0, 1);
console.log(answer);
