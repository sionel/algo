const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().replaceAll('\r', '').trim().split("\n")

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
const result = new Array(arr.length).fill(-1);
const stack = []

for (let i = 0; i < n; i++) {
  while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
    result[stack.pop()] = arr[i]
  }
  stack.push(i)
}
console.log(result.join(' '));