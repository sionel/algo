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

let n = input()
const obj = {
  0:0,
  1:0,
  2:0,
  3:0,
  4:0,
  5:0,
  6:0,
  7:0,
  8:0,
  9:0
}
Array(...n).forEach(e=>obj[e]++)
let max = 0
for(let i = 0 ; i < 9 ; i++){
  max = i === 6 ?  Math.max(max , Math.ceil((obj[i] + obj[9])/2))  : Math.max(max , obj[i])
}
console.log(max)