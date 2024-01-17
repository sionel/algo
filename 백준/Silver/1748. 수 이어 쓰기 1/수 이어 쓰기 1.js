const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let length = (n + "").length;

let result = (n + 1 - Math.pow(10, length - 1)) * length;
while (length--) {
  result += (Math.pow(10, length) - Math.pow(10, length - 1)) * length;
}
console.log(result);
