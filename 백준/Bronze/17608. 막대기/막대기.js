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
const stack = []

for(let i = 0 ; i < n ; i++){
  stack.push(Number(input()))
}
let count = 0
let temp = 0
while(stack.length){
  const value = stack.pop()
  if(value > temp){
    count++
    temp = value
  }
}
console.log(count);