const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, h] = input[0].split(" ").map(Number);

const lowerBound = (arr, key) => {
  let mid;
  let result = arr.length;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] < key) {
      start = mid + 1;
      continue;
    }
    result = Math.min(result, mid);
    end = mid - 1;
  }
  return result;
};

const bottom = [];
const top = [];

for (let i = 0; i < n; i++) {
  if (i % 2 === 0) {
    bottom.push(Number(input[i + 1]));
  } else {
    top.push(Number(input[i + 1]));
  }
}

bottom.sort((a, b) => a - b);
top.sort((a, b) => a - b);

let min = Infinity;
let count = 1;
for (let i = 1; i <= h; i++) {
  let crash = 0;
  crash += bottom.length - lowerBound(bottom, i);
  crash += top.length - lowerBound(top, h + 1 - i);

  if (crash < min) {
    min = crash;
    count = 1;
  } else if (crash === min) {
    count++;
  }
}

console.log(min, count);
