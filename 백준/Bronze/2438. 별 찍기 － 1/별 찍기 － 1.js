const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replace("\r", "")
  .split("\n");

const n = Number(input[0])
const result = []
const star = "".padStart(100,"*")
for(let i = 1 ; i <= n ; i++){
  result.push(star.slice(0,i))
}
console.log(result.join('\n'));
