const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().replaceAll('\r', '').split('\n')

const sudoku = input.map((row) => row.split("").map(Number))


const check = (i,j) => {
  const checkList = Array.from({ length: 10 }, () => 0);
  for (let k = 0; k < 9; k++) {
    checkList[sudoku[i][k]] = 1;
    checkList[sudoku[k][j]] = 1;
  }
  const x = Math.floor(i / 3) * 3;
  const y = Math.floor(j / 3) * 3;
  for (let a = x; a < x + 3; a++) {
    for (let b = y; b < y + 3; b++) {
      checkList[sudoku[a][b]] = 1;
    }
  }
  return checkList;
}
const conjecture = (x, y) => {
  for (let i = x; i < 9; i++) {
    for (let j = y; j < 9; j++) {
      if (!sudoku[i][j]) {
        const checkList = check(i, j);
        for (let num = 1; num <= 9; num++) {
          if (!checkList[num]) {
            sudoku[i][j] = num;
            if (conjecture(i, j)) {
              return true;
            }
            sudoku[i][j] = 0;
          }
        }
        return false
      }
      if(i === 8 && j === 8) {
        return true
      }
    }
    y = 0
  }
};

conjecture(0, 0);

console.log(sudoku.map((row) => row.join("")).join("\n"));