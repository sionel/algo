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

let S = Number(input())
let N = 0
let cnt = 1
let sum = 0
while(S >= sum+cnt){
  sum += cnt++
  N++
}

console.log(N);