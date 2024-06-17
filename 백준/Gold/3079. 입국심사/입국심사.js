const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(BigInt);
arr.sort((a, b) => (a > b ? 1 : -1));
let min = 0n;
let max = 10n ** 9n * BigInt(m);
let result = 0;
while (min <= max) {
  let mid = BigInt((min + max) / 2n);
  let sum = 0n;

  for (let i = 0; i < n; i++) {
    sum += BigInt(mid / arr[i]);
  }
  if (sum >= m) {
    max = mid - 1n;
  } else {
    min = mid + 1n;
    result = min;
  }
}

console.log(Number(result));
