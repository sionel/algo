const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
let cases = Number(input())

for (let i = 0; i < cases; i++) {

  const [count, target] = input().split(' ').map(Number)
  const priorities = input().split(' ').map((e, i) => [Number(e), i])
  let index = 0
  let result = 0
  while (true) {
    const max = Math.max(...priorities.map(e => e[0]))
    if (priorities[index][0] === max) {
      if (priorities[index][1] === target) {
        console.log(result + 1);
        break
      }
      priorities[index] = [-1, -1]
      result++
    } else {
      priorities.push(priorities[index])
      priorities[index] = [-1, -1]
    }
    index++
  }
}


