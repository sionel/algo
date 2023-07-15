const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((e) => e.split("").map(Number));
const isLoad = (x, y) =>
  x >= 0 && x < N && y >= 0 && y < M && map[x][y] && !visisted[[x, y]];
const visisted = {};

const queue = [[0, 0]];
visisted[[0, 0]] = 1;
let index = 0;

while (true) {
  const [x, y] = queue[index++];

  if (x === N - 1 && y === M - 1) {
    console.log(visisted[[x, y]]);
    break;
  }
  if (isLoad(x + 1, y)) {
    queue.push([x + 1, y]);
    visisted[[x + 1, y]] = visisted[[x, y]] + 1;
  }
  if (isLoad(x - 1, y)) {
    queue.push([x - 1, y]);
    visisted[[x - 1, y]] = visisted[[x, y]] + 1;
  }
  if (isLoad(x, y + 1)) {
    queue.push([x, y + 1]);
    visisted[[x, y + 1]] = visisted[[x, y]] + 1;
  }
  if (isLoad(x, y - 1)) {
    queue.push([x, y - 1]);
    visisted[[x, y - 1]] = visisted[[x, y]] + 1;
  }
}
