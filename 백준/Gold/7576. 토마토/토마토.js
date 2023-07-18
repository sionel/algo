const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
const [N, M] = input().split(' ').map(Number)
const box = []
const queue = []
let result = N * M
for (let i = 0; i < M; i++) {
  const arr = input().split(' ').map(Number)
  for (let j = 0; j < N; j++) {
    if (arr[j] === 1) {
      arr[j] = -1
      queue.push([i, j, 0])
    }
    if (arr[j] === -1) result--
  }
  box.push(arr)
}
let index = 0
let max = 0
while (queue.length !== index) {
  const [x, y, cost] = queue[index++]
  max = Math.max(max, cost)
  if (x + 1 < M && box[x + 1][y] === 0) {
    box[x + 1][y] = -1
    result--
    queue.push([x + 1, y, cost + 1])
  }
  if (x - 1 >= 0 && box[x - 1][y] === 0) {
    box[x - 1][y] = -1
    result--
    queue.push([x - 1, y, cost + 1])
  }
  if (y + 1 < N && box[x][y + 1] === 0) {
    box[x][y + 1] = -1
    result--
    queue.push([x, y + 1, cost + 1])
  }
  if (y - 1 >= 0 && box[x][y - 1] === 0) {
    box[x][y - 1] = -1
    result--
    queue.push([x, y - 1, cost + 1])
  }

}

if (result !== 0) console.log(-1);
else console.log(max);