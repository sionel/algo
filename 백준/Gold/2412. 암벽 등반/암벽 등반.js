const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const MAX = 50001;
const [n, T] = input[0].split(" ").map(Number);

const point = {}
for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  point[`${x}-${y}`] = true
}



const isAvailable = (x, y) => {
  if (x < 0 || x >= MAX || y < 0 || y >= T + 1) return false;
  return !!point[`${x}-${y}`];
};

const queue = [[0, 0, 0]];
while (queue.length > 0) {
  const [x, y, time] = queue.shift();
  for (let i = -2; i < 3; i++) {
    for (let j = -2; j < 3; j++) {
      if (i === 0 && j === 0) continue;
      if (isAvailable(x + i, y + j)) {
        if (y + j === T) {
          console.log(time + 1);
          return;
        }
        queue.push([x + i, y + j, time + 1]);
        point[`${x + i}-${y + j}`] = false;
      }
    }
  }
}

console.log(-1);