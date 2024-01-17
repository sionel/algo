const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");

const n = Number(input[0]);
let result = "";
const fractal = (i, j, num) => {
  if (Math.floor(i / num) % 3 === 1 && Math.floor(j / num) % 3 === 1) {
    return " ";
  } else {
    if (num / 3 === 0) return "*";
    else return fractal(i, j, Math.floor(num / 3));
  }
};
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    result += fractal(i, j, n);
  }
  result += "\n";
}

console.log(result);
