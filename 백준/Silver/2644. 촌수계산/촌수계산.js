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

const n = Number(input());

const map = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }, () => 101)
);
const [start, end] = input().split(" ").map(Number);

const nodeCount = Number(input());

for (let i = 0; i < nodeCount; i++) {
  const [n1, n2] = input().split(" ").map(Number);
  map[n1][n2] = 1;
  map[n2][n1] = 1;
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      map[i][j] = Math.min(map[i][j], map[i][k] + map[k][j]);
    }
  }
}

console.log(map[start][end] === 101 ? -1 : map[start][end]);
