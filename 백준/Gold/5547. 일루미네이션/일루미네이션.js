const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const map = [];
map.push(Array.from({ length: n + 2 }, () => 0));
for (let i = 1; i <= m; i++) {
  map[i] = [];
  map[i].push(0);
  map[i].push(...input[i].split(" ").map(Number));
  map[i].push(0);
}
map.push(Array.from({ length: n + 2 }, () => 0));
const counts = Array.from({ length: m + 2 }, () =>
  Array.from({ length: n + 2 }, () => 0)
);
let count = 0;
const queue = [];
const dx = [-1, 0, 0, 1, 1, 1];
const dy = [0, -1, 1, -1, 0, 1];
queue.push([0, 0]);
map[0][0] = 2;
let index = 0;
while (index < queue.length) {
  const [x, y] = queue[index++];
  const isOdd = y % 2 !== 0;
  for (let i = 0; i < 6; i++) {
    const nx = x + dx[i] * (isOdd ? 1 : -1);
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx > n + 1 || ny > m + 1) continue;
    if (map[ny][nx] === 0) {
      queue.push([nx, ny]);
      map[ny][nx] = 2;
    } else if (map[ny][nx] === 1) {
      count++;
      counts[y][x]++;
    }
  }
}

console.log(count);
