const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
const number = Number(input())
const arr = input().split(' ').map(Number)
arr.sort((a, b) => a - b)
const arr2 = Array(number+1).fill(0)

for(let i = 1 ; i <= number ; i++){
  arr2[i] = arr2[i-1] + arr[i-1]
}

console.log(arr2.reduce((sum,cur)=>sum+cur,0));