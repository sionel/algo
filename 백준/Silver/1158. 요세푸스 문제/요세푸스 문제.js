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

let [n, m] = input().split(' ').map(Number)

const arr = Array.from({length : n},(_,i)=>i+1)
const result = []

while(n--){
  for(let i = 1 ; i < m ; i++){
    arr.push(arr.shift())
  }
  result.push(arr.shift())
}



console.log(`<${result.join(', ')}>`);