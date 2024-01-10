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

let n = Number(input())
let result = 1
let l = 0, r = 1, sum = 1
while (r !== n) {
  if(sum < n){
    sum+=++r
  }else if(sum >n){
    sum-=++l
  }else {
    result++
    sum-=++l
  }
}

console.log(result);