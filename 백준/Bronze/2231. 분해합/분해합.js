const fs = require("fs");
const input = (() => {
  // const stdin = fs.readFileSync('./input.txt').toString().split('\n');
  const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
const n = Number(input())
let result = 0
for (let i = n>>1; i < n; i++) {
  const str = i.toString()
  const sum = i + [...str].reduce((s, c) => s + Number(c), 0)
  if (sum === n) {
    result = i
    break
  }
}

console.log(result);