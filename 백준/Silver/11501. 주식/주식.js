const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs
    .readFileSync(filePath)
    .toString()
    .replaceAll("\r", "")
    .split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();
let t = Number(input())
let result = []
while(t--){
  const n = Number(input())
  const arr = input().split(' ').map(Number)
  let max = 0
  let value = 0n
  for(let i = n-1 ; i>=0 ; i--){
    if(max < arr[i]){
      max = arr[i]
    } else {
      value += BigInt(max - arr[i])
    }
  }
  result.push(value)
}

console.log(result.map(String).join('\n'));