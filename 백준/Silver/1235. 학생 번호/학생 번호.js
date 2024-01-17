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

const stdList = []
for(let i = 0 ; i < n ; i++){
  stdList.push(input()) 
}
const length = stdList[0].length
let answer = 1
while(true){
  const set = new Set()
  for(let i = 0 ; i < n ; i++){
    set.add(stdList[i].slice(length-answer, length))
  }
  if(set.size === n) {
    console.log( answer)
    break
  }
  answer++
}