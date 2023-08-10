const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0])

console.log(n * 0.78, n - n * 0.2 * 0.22);