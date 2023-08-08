const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const board = [];

for (let i = 1; i <= n; i++) {
  board.push(input[i].split(" ").map(Number));
}

const dfs = (x, y, board, depth, weight) => {
  const newBoard = board.map((e) => [...e]);
  newBoard[x][y] = 0;
  let value = depth;
  for (let i = 1; i < n; i++) {
    if (x - i >= 0 && y - i >= 0 && newBoard[x - i][y - i]) {
      newBoard[x - i][y - i] = 0;
    }
    if (x - i >= 0 && y + i < n && newBoard[x - i][y + i]) {
      newBoard[x - i][y + i] = 0;
    }
    if (x + i < n && y - i >= 0 && newBoard[x + i][y - i]) {
      newBoard[x + i][y - i] = 0;
    }
    if (x + i < n && y + i < n && newBoard[x + i][y + i]) {
      newBoard[x + i][y + i] = 0;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = (i % 2) - weight; j < n; j = j + 2) {
      if (newBoard[i][j]) {
        newBoard[i][j] = 0;
        value = Math.max(value, dfs(i, j, newBoard, depth + 1, weight));
      }
    }
  }
  return value;
};

let white = 0;
let black = 0;
for (let i = 0; i < n; i++) {
  for (let j = i % 2; j < n; j = j + 2) {
    if (board[i][j]) {
      board[i][j] = 0;
      white = Math.max(white, dfs(i, j, board, 1, 0));
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = (i % 2) - 1; j < n; j = j + 2) {
    if (board[i][j]) {
      board[i][j] = 0;
      black = Math.max(black, dfs(i, j, board, 1, 1));
    }
  }
}

console.log(black + white);

