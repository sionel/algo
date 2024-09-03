const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [A, B, C] = input[0].split(" ").map(Number);

function f(x, A, B, C) {
  return A * x + B * Math.sin(x) - C;
}

const tol = 1e-9;
let start = 0;
let end = 2 * C;
let mid
while (Math.abs(start - end) > tol) {
  mid = (start + end) / 2;
  if (f(mid, A, B, C) <= 0) {
    start = mid;
  } else {
    end = mid;
  }
}

console.log(mid);
