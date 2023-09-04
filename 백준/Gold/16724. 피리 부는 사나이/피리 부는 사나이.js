const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");

const [r, c] = input[0].split(" ").map(Number);
const dirMap = {
  D: [1, 0],
  U: [-1, 0],
  L: [0, -1],
  R: [0, 1],
};
const dirs = [];
for (let i = 1; i <= r; i++) {
  dirs.push(input[i].split(""));
}
const map = Array.from({ length: r }, () => Array.from({ length: c }, () => 0));
let result = 0;
const dfs = (i, j) => {
  if (map[i][j] === 2) return 2;
  else if (map[i][j] === 1) {
    result++;
    map[i][j] = 2;
    return 2;
  } else {
    const dir = dirs[i][j];
    const [mx, my] = dirMap[dir];
    map[i][j] = 1;
    map[i][j] = dfs(i + mx, j + my);
  }
};

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (!map[i][j]) dfs(i, j);
  }
}

console.log(result);
