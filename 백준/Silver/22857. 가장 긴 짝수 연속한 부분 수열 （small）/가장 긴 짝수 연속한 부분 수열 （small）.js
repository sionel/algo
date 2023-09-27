const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r")
  .split("\n");

const [s, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = 0;
let count = 0;
let odd = 0;
let result = 0;

while (right !== s) {
  if (arr[right++] % 2) odd++;
  else count++;
  while (odd > k) {
    if (arr[left++] % 2) odd--;
    else count--;
  }
  result = Math.max(count, result);
}

console.log(result);
