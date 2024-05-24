const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

const euclid = (a, b) => (b === 0 ? a : euclid(b, a % b));

let max = Infinity;
let a = 0,
  b = 0;
for (let i = 1; i <= m / n; i++) {
  if ((m / n) % i === 0 && euclid(i, m / n / i) === 1) {
    if (max > i + m / n / i) {
      a = i;
      b = m / n / i;
      max = i + m / n / i;
    }
  }
}

console.log(a * n, b * n);
