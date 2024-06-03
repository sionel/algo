const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].trim().split(" ").map(Number);

let left = 0
let right = Math.max(...arr);

const divide = (mid) => {
  let count = 1;
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);

    if (max - min > mid) {
      count++;
      max = -Infinity;
      min = Infinity;
      i--;
    }
  }
  return count;
};
while (left < right) {
  let mid = Math.floor((left + right) / 2);
  if (divide(mid) <= m) {
    right = mid;
  } else {
    left = mid + 1;
  }
}

console.log(right);
