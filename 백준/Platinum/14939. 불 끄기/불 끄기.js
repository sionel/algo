const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .split("\n")
  .map((s) => Array.from(s));

const w = 10;
const h = 10
const v = [
  [0, 0],
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function isValid(x, y) {
  if (0 > x || w <= x) return false;
  if (0 > y || h <= y) return false;
  return true;
}

function toggle(x, y, input) {
  for (const [vx, vy] of v) {
    const [nx, ny] = [x + vx, y + vy];
    if (isValid(nx, ny)) input[ny][nx] = input[ny][nx] === "O" ? "#" : "O";
  }
}

function copy() {
  return Array.from({ length: 10 }, (_, i) => [...input[i]]);
}

const res = [];
function recursion(x = 0, cnt = 0) {
  if (x === w) {
    let _cnt = cnt;
    const copied = copy();
    for (let y = 1; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (copied[y - 1][x] === "O") {
          toggle(x, y, copied);
          _cnt += 1;
        }
      }
    }

    const allOff = copied.some((e) => e.some((e) => e === "O"));
    if (!allOff) res.push(_cnt);

    return;
  }
  toggle(x, 0, input);
  recursion(x + 1, cnt + 1);
  toggle(x, 0, input);
  recursion(x + 1, cnt);
}

recursion();

console.log(res.length === 0 ? -1 : Math.min(...res));