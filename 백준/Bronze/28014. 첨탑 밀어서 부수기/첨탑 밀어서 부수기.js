const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")

let n = Number(input.shift())
let arr = input[0].split(' ').map(Number)
let temp = 0
let result = 0
for (let i = 0; i < n; i++) {
  const e = arr[i]
  if (e >= temp) result++
  temp = e
}

console.log(result);