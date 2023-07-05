const fs = require("fs");
//"./input.txt , /dev/stdin"
const input = (() => {
  const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
input()
const hands = input().split(' ').map(Number).reduce((obj, cur) => {
  obj[cur] = obj[cur] || 0
  obj[cur]++
  return obj
}, {})
input()
const result = input().split(' ').map(Number).map(e=>hands[e] || 0 )

console.log(...result);