const fs = require("fs");
// const input = (() => {
//   const stdin = fs.readFileSync('./input.txt').toString().split('\n');
//   // const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
//   let ln = 0;
//   return () => stdin[ln++];
// })();
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input.shift().split(' ').map(Number)
const board = [...input]
// console.log(board);
const whiteBoard = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW'
]
const blackBoard = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
]

const whiteCheck = (i, j) => {
  let count = 0
  for (let x = i; x < i + 8; x++) {
    for (let y = j; y < j + 8; y++) {
      if (input[x][y] !== whiteBoard[x - i][y - j]) count++
    }
  }
  return count
}
const blackCheck = (i, j) => {
  let count = 0
  for (let x = i; x < i + 8; x++) {
    for (let y = j; y < j + 8; y++) {
      if (input[x][y] !== blackBoard[x - i][y - j]) count++
    }
  }
  return count
}

let min = Infinity
for (let i = 0; i + 7 < N; i++) {
  for (let j = 0; j + 7 < M; j++) {
    min = Math.min(min, whiteCheck(i, j), blackCheck(i, j))
  }
}

console.log(min);