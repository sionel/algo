const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

let answer = 1;

for (let x = 0; x < N - 1; x++) {
  for (let z = N - 1; z > x; z--) {
    if (arr[x] + arr[x + 1] > arr[z]) {
      answer = Math.max(z - x + 1, answer);
      break;
    }
  }
}

console.log(answer);
