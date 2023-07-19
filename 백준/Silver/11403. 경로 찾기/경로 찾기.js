const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split('\n');

const n = Number(input.shift())
const board = input.map(e => e.split(' ').map(Number))

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][k] && board[k][j])
        board[i][j] = 1
    }
  }
  // 출력예시에 맞게 출력

}
for (let i = 0; i < n; i++) {
  console.log(board[i].join(' '));
}