const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replace("\r", "")
  .split("\n");

const n = Number(input[0])
const result = []
const star = "".padStart(100,"*").padStart(200," ")
for(let i = 1 ; i <= n ; i++){
  result.push(star.substring(100-n+i ,100+i))
}
console.log(result.join('\n'));