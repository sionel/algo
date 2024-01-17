const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");


const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
arr.sort((a, b) => a - b)
let result = 0

for (let i = 0; i < n; i++) {
  let target = arr[i]
  let left = 0
  let right = n - 1
  if (left === i) left++
  if (right === i) right--
  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === target) {
      result++
      break
    }
    if (sum < target) left++
    else right--

    if (left === i) left++
    if (right === i) right--
  }
}
console.log(result);
