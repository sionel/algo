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

const [x,y] = input().split(' ').map(Number)

const arr = Array.from({ length: x }, () => Array.from({length:y},()=>0));

for(let i = 0 ; i < x ; i++){
  const line = input().split(' ').map(Number)
  for(let j = 0 ; j < y ; j++){
    arr[i][j] += line[j]
  }
}

for(let i = 0 ; i < x ; i++){
  const line = input().split(' ').map(Number)
  for(let j = 0 ; j < y ; j++){
    arr[i][j] += line[j]
  }
}

console.log(arr.map(e=>e.join(' ')).join('\n'));