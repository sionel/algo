const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [A,B,V] = fs.readFileSync(filePath).toString().split(' ').map(Number);

let gap = A-B
const day = Math.ceil((V-A)/gap) +1
console.log(day);