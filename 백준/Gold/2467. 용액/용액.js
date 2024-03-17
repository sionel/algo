/* 반례 리스트
5
-100 -1 0 1 101


*/
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replace("\r", "")
  .split("\n");

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)
let left = 0, right = n - 1
let temp = 0
let min = Infinity
const result = []
while (left < right) {
  temp = arr[left] + arr[right]
  if (Math.abs(temp) < min) {
    min = Math.abs(temp)
    result[0] = arr[left]
    result[1] = arr[right]
  }
  if (temp < 0) {
    left++
  } else if (temp > 0) {
    right--
  } else {
    break
  }
}

console.log(result.join(" "))