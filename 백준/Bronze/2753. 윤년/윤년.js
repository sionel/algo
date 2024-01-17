const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
let n = Number(input())

console.log( !(n%400) ? 1 : !(n% 100)? 0 : !(n % 4) ? 1 : 0)