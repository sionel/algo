const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[0].split('').map(Number)
let result = 0
for(let i = 0 ; i < 5 ; i++){
  result += arr[i] ** 5
}
console.log(result);