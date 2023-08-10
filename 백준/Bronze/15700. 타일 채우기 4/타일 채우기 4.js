const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(' ').map(BigInt)
console.log((n * m / BigInt(2)).toString());