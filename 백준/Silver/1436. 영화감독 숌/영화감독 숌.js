const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();
const num = Number(input)
let sixsixsix = 666
let count = 0
while (count !== num) {
  if (sixsixsix.toString().includes('666')) count++
  sixsixsix++
}
console.log(sixsixsix-1);