const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const sudoku = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .split("\n")
  .map((s) => s.split("").map(Number));
/* 
const input = fs.readFileSync(filePath).toString().replaceAll('\r\n', '');

const numToBoard = (str) => {
  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push(str.slice(i * 9, (i + 1) * 9).split("").map(Number));
  }
  return board;
}

const sudoku = numToBoard(input);
*/



function check(x, y, num) {
  for (let i = 0; i < 9; i++) if (sudoku[x][i] === num) return false;
  for (let i = 0; i < 9; i++) if (sudoku[i][y] === num) return false;
  const tx = Math.floor(x / 3);
  const ty = Math.floor(y / 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (sudoku[3 * tx + j][3 * ty + i] === num) return false;
    }
  }
  return true;
}

const conjecture = (x, y) => {
  if (y === 9) {
    x += 1
    y = 0
  }
  if(x === 9) return true;
  if (sudoku[x][y] !== 0) {
    return conjecture(x, y + 1);
  } else {
    for (let num = 1; num <= 9; num++) {
      if (check(x, y, num)) {
        sudoku[x][y] = num;
        if (conjecture(x, y + 1)) return true;
        sudoku[x][y] = 0;
      }
    }
  }
}

conjecture(0, 0);

console.log(sudoku.map((row) => row.join("")).join("\n"));
