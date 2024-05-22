const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let result = 0;
const positive = [];
const negative = [];
arr.forEach((e) => (e < 0 ? negative.push(e) : positive.push(e)));
positive.sort((a, b) => b - a);
negative.sort((a, b) => a - b);
positive.forEach((e, i) => {
  if (i % m === 0) result += 2 * e;
});
negative.forEach((e, i) => {
  if (i % m === 0) result += -2 * e;
});

result -= Math.max(positive[0] || 0, (negative[0] || 0) * -1);

console.log(result);
