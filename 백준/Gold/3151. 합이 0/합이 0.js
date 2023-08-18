const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

arr.sort((a, b) => a - b)
let result = 0

const lowerBound = (start, end, key) => {
  let mid;
  let result = Infinity
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] < key) {
      start = mid + 1;
      continue;
    }
    result = Math.min(result, mid);
    end = mid - 1;
  }
  return result
};

const upperBound = (start, end, key) => {
  let mid;
  let result = Infinity
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] <= key) {
      start = mid + 1;
      continue;
    }
    result = Math.min(result, mid);
    end = mid - 1;
  }
  return result
};


for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    const sum = arr[i] + arr[j]
    const lower = lowerBound(j+1, n, 0 - sum)
    const upper = upperBound(j+1, n, 0 - sum)
    result += upper - lower
  }
}
console.log(result);