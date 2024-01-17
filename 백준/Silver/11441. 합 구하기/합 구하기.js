const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r")
  .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let cases = Number(input[2]);
let sum = 0;
const sumArr = arr.map((e) => (sum += e));
sumArr.unshift(0);
const result = [];
for (let i = 3; i < cases + 3; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  result.push(sumArr[end] - sumArr[start - 1]);
}

console.log(result.join("\n"));
