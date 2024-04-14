const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replace("\r", "")
  .split("\n");

let [n, r, c] = input.shift().split(" ").map(Number);
let result = 0;
let size = Math.pow(2, n - 1);
while (size > 0) {
  if (r < size && c < size) {
    result = result;
  } else if (r < size && c >= size) {
    result += size * size;
    c -= size;
  } else if (r >= size && c < size) {
    result += size * size * 2;
    r -= size;
  } else {
    result += size * size * 3;
    r -= size;
    c -= size;
  }
  size /= 2;
}

console.log(result);
