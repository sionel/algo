for (let i = 0; i < 9; i++) {
  sudoku.push(input().split(" ").map(Number));
}

const check = (x, y) => {
  const arrX = Array.from({ length: 10 }, () => true);
  const arrY = Array.from({ length: 10 }, () => true);
  const block = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => true)
  );
  for (let i = 0; i < 9; i++) {
    if (arrX[sudoku[i][y]]) {
      if (sudoku[i][y]) {
        arrX[sudoku[i][y]] = false;
      }
    } else return false;
  }
  for (let i = 0; i < 9; i++) {
    if (arrY[sudoku[x][i]]) {
      if (sudoku[x][i]) {
        arrY[sudoku[x][i]] = false;
      }
    } else return false;
  }

  const GX = parseInt((x + 1) / 3);
  const GY = parseInt((y + 1) / 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (block[i][j]) {
        if (sudoku[GX * 3 + i][GY * 3 + j]) {
          block[i][j] = false;
        }
      } else return false;
    }
  }

  return true;
};
