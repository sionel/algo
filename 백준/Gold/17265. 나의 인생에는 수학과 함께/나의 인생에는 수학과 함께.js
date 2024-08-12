const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const map = [];

for (let i = 1; i <= n; i++) {
  map.push(input[i].split(" "));
}
const result = [];
const bfs = (x, y, str) => {
  if (x === n - 1 && y === n - 1) {
    result.push(eval(str + map[x][y]));
    return;
  } else {
    if((x + y )%2 === 1) str = eval(str);
    if (x !== n - 1) {
      bfs(x + 1, y, str + map[x][y]);
    }
    if (y !== n - 1) {
      bfs(x, y + 1, str + map[x][y]);
    }
  }
};

bfs(0, 0, "");
console.log(Math.max(...result), Math.min(...result));
