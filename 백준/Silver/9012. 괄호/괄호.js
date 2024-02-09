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
const result = []
while (n--) {
  const arr = [...input()]
  let stack = 0
  let flag = true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') stack++
    else stack--
    if (stack < 0) {
      flag = false
      break
    }
  }
  result.push(flag && stack === 0 ? "YES" : "NO")
}
console.log(result.join('\n'));