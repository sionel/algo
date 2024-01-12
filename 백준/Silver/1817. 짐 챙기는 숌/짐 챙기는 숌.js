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
if(n){
  const books = input().split(' ').map(Number)
  let idx = 0
  let sum = 0
  let result = 1
  while (idx !== n) {
    const book = books[idx++]
    if (sum + book > m) {
      sum = 0
      result++
    }
    sum += book
  }
  
  console.log(result); 
}else console.log(0);
