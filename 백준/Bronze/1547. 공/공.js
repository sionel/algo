
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replace("\r", "")
  .split("\n");

const n = Number(input[0])
let idx = 0
const arr = Array(4).fill(false)
arr[1] = true

while(n !== idx++){
  const [a, b] = input[idx].split(" ").map(Number)
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp  
}
console.log(arr.indexOf(true))
