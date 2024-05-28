const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [n, m, r] = input[0].split(" ").map(Number);
const domino = [];
const original = [];
for (let i = 1; i <= n; i++) {
  domino.push(input[i].split(" ").map(Number));
  original.push(input[i].split(" ").map(Number));
}

const dirs = {
  E: [0, 1],
  W: [0, -1],
  S: [1, 0],
  N: [-1, 0],
};

const attack = (x, y, dir) => {
  let sum = 1;
  let nx = x + dirs[dir][0];
  let ny = y + dirs[dir][1];
  let size = domino[x][y] - 1;
  domino[x][y] = 0;
  while (nx >= 0 && nx < n && ny >= 0 && ny < m && size > 0) {
    if (domino[nx][ny] !== 0) sum++;
    size = Math.max(size - 1, domino[nx][ny] - 1);
    domino[nx][ny] = 0;
    nx += dirs[dir][0];
    ny += dirs[dir][1];
  }
  return sum;
};
let result = 0;
for (let i = 0; i < r; i++) {
  const [x, y, dir] = input[n + 1 + i * 2].split(" ");
  const [rx, ry] = input[n + 2 + i * 2].split(" ").map(Number);
  let nx = Number(x) - 1;
  let ny = Number(y) - 1;
  if (domino[nx][ny] !== 0) result += attack(nx, ny, dir);
  if (domino[rx - 1][ry - 1] === 0)
    domino[rx - 1][ry - 1] = original[rx - 1][ry - 1];
}
console.log(result);
console.log(
  domino.map((el) => el.map((e) => (e ? "S" : "F")).join(" ")).join("\n")
);
