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
const x = input().split(' ').map(Number)
const arr = x.map((e, i) => [e, i]).sort((a, b) => a[0] - b[0])
let pre = -1000000001
let index = -1
const result = arr.map(e => {
  if (e[0] === pre) {
    return [index, e[1]]
  }
  else {
    pre = e[0]
    return [++index, e[1]]
  }
}).sort((a, b) => a[1] - b[1]).map(e=>e[0]).join(' ')

console.log(result);


