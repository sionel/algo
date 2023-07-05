const fs = require("fs");
const input = (() => {
  // const stdin = fs.readFileSync('./input.txt').toString().split('\n');
  const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
let N = input()
const arr = []
while(N--){
  const num = Number(input())
  if(num) arr.push(num)
  else arr.pop()
}
console.log(arr.reduce((sum,cur)=>sum+cur,0))