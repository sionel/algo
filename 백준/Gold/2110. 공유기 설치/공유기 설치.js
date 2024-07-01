const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, c] = input.shift().split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => a - b);

let min = 1;
let max = Math.max(...arr) - Math.min(...arr);
let mid = 0;

const isPossible = (mid) => {
  let cnt = 1;
  let start = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] - start >= mid) {
      cnt++;
      start = arr[i];
    }
  }
  return cnt >= c;

}
let result = 0
while (min <= max) {
  mid = Math.floor((min + max) / 2);
  if (isPossible(mid)) {
    result = Math.max(result, mid);
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(result);
