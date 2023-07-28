const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, L] = input.shift().split(" ").map(Number);
const arr = input.map(Number);

arr.sort((a, b) => a - b);

let end = N;

let result = 0;
for (let i = 0; i < end - 1; i++) {
  for (let j = i + 1; j < end; j++) {
    if (arr[i] + arr[j] > L) {
      end = j;
      break;
    } else {
      result++;
    }
  }
}

console.log(result);
