const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().replaceAll('\r',"").split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();

const [n, x] = input().split(' ').map(Number)
const arr = input().split(' ').map(Number).filter(e=>e<x)
console.log(arr.join(' '));
