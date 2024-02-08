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

const [n,m] = input().split(" ").map(Number)

// eratos
const eratos = (i) => {
  let arr = Array(i+1).fill(true)
  arr[0] = arr[1] = false
  for (let i = 2; i <= Math.sqrt(arr.length); i++) {
    if (arr[i]) {
      for (let j = i*i; j < arr.length; j += i) {
        arr[j] = false
      }
    }
  }
  return arr
}
const eratosResult = eratos(m)
let result = []
for(let i = n ; i <= m; i++) {
  if (eratosResult[i]) {
    result.push(i)
  }
}
console.log(result.join("\n"));