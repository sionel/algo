/*
4
1 2
2 3
3 4
4 5
5 6
6 7
7 8
8 9
9 10
10 11
11 12
12 13
13 14
14 15
15 16
16 1
*/
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replace("\r", "")
  .split("\n");

const n = Number(input[0]);
const favorite = input.splice(1).map((item) => {
  const map = item.split(" ").map((item) => Number(item));
  return [map[0], map.splice(1)];
});

const seat = Array.from({ length: n }, () => Array(n).fill(0));
const students = Array.from({ length: n * n + 1 }, () => [0, 0]);

for (let k = 0; k < n * n; k++) {
  const [student, friends] = favorite[k];
  let score = -1;
  let position = [0, 0];
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (seat[i][j] !== 0) continue;
      let favoriteCount = 0;
      let emptyCount = 0;
      for (let d = 0; d < 4; d++) {
        const nx = i + dx[d];
        const ny = j + dy[d];
        if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
        if (friends.includes(seat[nx][ny]))
          favoriteCount = favoriteCount * 10 || 10;
        if (seat[nx][ny] === 0) emptyCount++;
      }
      if (score < favoriteCount + emptyCount) {
        score = favoriteCount + emptyCount;
        position = [i, j];
      }
    }
  }

  students[student] = [...position];
  seat[position[0]][position[1]] = student;
}

let answer = 0;

for (let k = 0; k < favorite.length; k++) {
  const [student, friends] = favorite[k];
  const position = students[student];
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let count = 0;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [position[0] + dx[i], position[1] + dy[i]];
    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

    if (friends.includes(seat[nx][ny])) count = count * 10 || 1;
  }
  answer += count;
}
console.log(answer);
