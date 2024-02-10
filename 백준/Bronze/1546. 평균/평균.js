const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs
    .readFileSync(filePath)
    .toString()
    .replaceAll("\r", "")
    .split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();

const n = Number(input())
const arr = input().split(" ").map(Number)
const max = Math.max(...arr)
const sum = arr.reduce((acc, cur) => acc + cur, 0)

console.log(sum/max*100/n);
