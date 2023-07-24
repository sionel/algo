const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();

const [N, M] = input().split(' ').map(Number)
const map = []
for (let i = 0; i < N; i++) {
  const arr = input().split(' ').map(Number)
  map.push(arr)
}

let result = 0

const spread = (arr) => {
  let count = 0
  let queue = []
  let index = 0

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 2) queue.push([i, j])
    }
  }

  while (queue.length !== index) {
    const [x, y] = queue[index++]

    if (x + 1 < N && arr[x + 1][y] === 0) {
      arr[x + 1][y] = 2
      queue.push([x + 1, y])
    }
    if (x - 1 >= 0 && arr[x - 1][y] === 0) {
      arr[x - 1][y] = 2
      queue.push([x - 1, y])
    }
    if (y + 1 < M && arr[x][y + 1] === 0) {
      arr[x][y + 1] = 2
      queue.push([x, y + 1])
    }
    if (y - 1 >= 0 && arr[x][y - 1] === 0) {
      arr[x][y - 1] = 2
      queue.push([x, y - 1])
    }
  }


  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 0) count++
    }
  }

  return count
}
const makeWall = (depth) => {
  if (depth === 3) {
    const tempMap = map.map(e => [...e])
    result = Math.max(result, spread(tempMap))
  } else {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] === 0) {
          map[i][j] = 1
          makeWall(depth + 1)
          map[i][j] = 0
        }
      }
    }
  }
}


makeWall(0)
console.log(result);