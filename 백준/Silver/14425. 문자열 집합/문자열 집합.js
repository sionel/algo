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

const [n, m] = input().split(' ').map(Number)
const map = {}
let result = 0
for(let i = 0 ; i < n ; i++){
  const str = input()
  map[str] = true
}
for(let i = 0 ; i < m ; i++){
  const str = input()
 
  if(map.hasOwnProperty(str))result++
}

console.log(result);
