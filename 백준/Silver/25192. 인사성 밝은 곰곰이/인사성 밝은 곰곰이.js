const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift())

let obj = {}
let result = 0
for (let i = 0; i < n; i++) {
  const str = input[i].replace('\r','')
  if (str === "ENTER") obj = {}
  else {
    if (!obj[str]) {
      obj[str] = true
      result++
    }
  }
}
console.log(result);