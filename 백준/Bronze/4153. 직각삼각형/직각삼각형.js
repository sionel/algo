const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();

while (true) {
  const arr = input().split(' ').map(Number)
  if(!arr[0]) break
  arr.sort((a,b)=>a-b)
  if(arr[0] **2 + arr[1]**2 === arr[2]**2) console.log("right");
  else console.log("wrong");
}
