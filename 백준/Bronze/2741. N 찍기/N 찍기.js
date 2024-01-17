const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
let n = Number(input())
let index = 0
let result = []

while(index !== n){
  result.push(++index)
}

console.log(result.join("\n"));