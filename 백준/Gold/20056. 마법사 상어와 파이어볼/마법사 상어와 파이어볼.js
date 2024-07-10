const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m, k] = input[0].split(" ").map(Number);
const board = Array.from({ length: n }, () => Array(m).fill(0));

let fireballs = [];

for (let i = 1; i <= m; i++) {
  const [r, c, m, s, d] = input[i].trim().split(" ").map(Number);
  board[r - 1][c - 1] = m;
  fireballs.push([r - 1, c - 1, m, s, d]);
}

const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
const dy = [0, 1, 1, 1, 0, -1, -1, -1];

const move = (x, y, s, d) => {
  let nx = x + dx[d] * s;
  let ny = y + dy[d] * s;

  if (Math.abs(nx) >= n) nx %= n;
  if (Math.abs(ny) >= n) ny %= n;
  if (nx < 0) nx += n;
  if (ny < 0) ny += n;

  return [nx, ny];
};

while (k--) {
  const newFireballs = [];
  const fireballsByPos = {};
  for (let i = 0; i < fireballs.length; i++) {
    const [x, y, m, s, d] = fireballs[i];
    const [nx, ny] = move(x, y, s, d);
    board[x][y] = 0;
    board[nx][ny] += m;
    // newFireballs.push([nx, ny, m, s, d]);
    fireballsByPos[`${nx} ${ny}`] = fireballsByPos[`${nx} ${ny}`] || [];
    fireballsByPos[`${nx} ${ny}`].push([nx, ny, m, s, d]);
  }

  for (const pos in fireballsByPos) {
    const arr = fireballsByPos[pos];
    if (arr.length === 1) {
      newFireballs.push(arr[0]);
    } else {
      let sumM = 0;
      let sumS = 0;
      let odd = 0;
      let even = 0;
      for (let i = 0; i < arr.length; i++) {
        const [x, y, m, s, d] = arr[i];
        sumM += m;
        sumS += s;
        if (d % 2 === 0) even++;
        else odd++;
      }
      const newM = Math.floor(sumM / 5);
      const newS = Math.floor(sumS / arr.length);
      if (newM === 0) continue;
      const [x, y, , ,] = arr[0];
      if (even === arr.length || odd === arr.length) {
        for (let i = 0; i < 8; i += 2) {
          newFireballs.push([x, y, newM, newS, i]);
        }
      } else {
        for (let i = 1; i < 8; i += 2) {
          newFireballs.push([x, y, newM, newS, i]);
        }
      }
    }
  }
  fireballs = newFireballs;
}

let result = 0;
for (let i = 0; i < fireballs.length; i++) {
  result += fireballs[i][2];
}
console.log(result);
