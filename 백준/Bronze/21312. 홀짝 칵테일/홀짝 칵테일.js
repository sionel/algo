const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r")
  .split("\n");

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

const odd = arr.filter((e) => e % 2);
if (odd.length) console.log(odd.reduce((cur, mul) => cur * mul, 1));
else console.log(arr[0] * arr[1] * arr[2]);
