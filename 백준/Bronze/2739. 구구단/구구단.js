const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
let n = Number(input())
let result = []

for(let i = 1 ; i <= 9 ; i++){
  result.push(`${n} * ${i} = ${n*i}`)
}

console.log(result.join("\n"));