const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let target = Number(input)
let number = 1
let index = 0
while (true) {
  number += 6 * index++
  if (number >= target) {
    console.log(index);
    break
  }
}