const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require("fs").readFileSync(filePath).toString().trim().split('\n')

const arr = input.slice(1).map(e => e.replace('\r', '').split(' '))
let answer = '';

arr.sort((a, b) => {
  return a[1] === b[1] ? a[0] - b[0]:  a[1] - b[1]
}).forEach(arr => {
  answer += `${arr[0]} ${arr[1]}\n`
});
console.log(answer);