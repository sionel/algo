const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim() // << 뻐킹 트림
  .replace("\r", "")
  .split("\n");

const arr = input.map(Number);
const result = [];
const hanoi4 = [0, 1n];
let n = 2n;
while (true) {
  for (let i = 1; i <= n; i++) {
    hanoi4.push(hanoi4[hanoi4.length - 1] + 2n ** (n - 1n));
    if (hanoi4.length === 1002) break;
  }
  if (hanoi4.length === 1002) break;
  n++;
}
for (let i = 0; i < arr.length; i++) {
  result.push(`Case ${i + 1}: ${hanoi4[arr[i]]}`);
}
console.log(result.join("\n"));
