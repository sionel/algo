const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0
let length = Infinity
let i = 0
let j = 0

while(j < n){
  sum += arr[j]
  while(sum >= m){
    sum -= arr[i]
    length = Math.min(length, j - i + 1)
    i++
  }
  j++
}
console.log(length === Infinity ? 0 : length)