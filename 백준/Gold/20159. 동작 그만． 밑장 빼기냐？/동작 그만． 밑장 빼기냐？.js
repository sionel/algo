const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const evenSum = [0, arr[0]];
const oddSum = [0, arr[1]];

for (let i = 1; i < n / 2; i++) {
  evenSum.push(evenSum[i] + arr[i * 2]);
  oddSum.push(oddSum[i] + arr[i * 2 + 1]);
}

let result = 0;

for (let i = 0; i < n / 2; i++) {
  result = Math.max(oddSum[n / 2] - oddSum[i] + evenSum[i], result);
  result = Math.max(evenSum[i + 1] + oddSum[n / 2 - 1] - oddSum[i], result);
}

console.log(result);
