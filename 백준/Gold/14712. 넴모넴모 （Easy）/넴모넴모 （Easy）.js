const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const board = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);

const isBoom = (x, y) => {
  if (
    x - 1 >= 0 &&
    y - 1 >= 0 &&
    board[x - 1][y - 1] &&
    board[x][y - 1] &&
    board[x - 1][y] &&
    board[x][y]
  )
    return true;
  if (
    x + 1 < n &&
    y + 1 < m &&
    board[x + 1][y + 1] &&
    board[x][y + 1] &&
    board[x + 1][y] &&
    board[x][y]
  )
    return true;
  if (
    x - 1 >= 0 &&
    y + 1 < m &&
    board[x - 1][y + 1] &&
    board[x][y + 1] &&
    board[x - 1][y] &&
    board[x][y]
  )
    return true;

  if (
    x + 1 < n &&
    y - 1 >= 0 &&
    board[x + 1][y - 1] &&
    board[x][y - 1] &&
    board[x + 1][y] &&
    board[x][y]
  )
    return true;

  return false;
};
let answer = 0;

const check = (x) => {
  if (x === n * m) {
    answer++;
    return;
  }
  const row = Math.floor(x / m);
  const col = x % m;

  check(x + 1);

  board[row][col] = true;
  if (!isBoom(row, col)) {
    check(x + 1);
  }
  board[row][col] = false;
};

check(0);

console.log(answer);
