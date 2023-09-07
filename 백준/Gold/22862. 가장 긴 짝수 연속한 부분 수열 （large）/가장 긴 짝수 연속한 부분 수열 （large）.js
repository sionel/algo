const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = 0;
let result = 0;
let odd = 0;
for (let i = 0; i < n; i++) {
  const now = arr[right++];
  if (now % 2) {
    odd++;
    while (odd > k) {
      const out = arr[left++];
      odd -= out % 2 ? 1 : 0;
    }
  }
  result = Math.max(result, right - left);
}

console.log(result - odd);
