const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b, c] = fs.readFileSync(filePath).toString().split(' ').map(Number);

const max = Math.max(a, b, c)
if (a + b + c - max > max){
  console.log(a+b+c);
}else {
  console.log((a+b+c-max)*2 -1);
}