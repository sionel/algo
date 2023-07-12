const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const people = input.shift()
if (!people) {
  console.log(0);
} else {
  const del = Math.round(people * 0.15)
  input.sort((a,b)=>a-b)
  let sum = 0
  for (let i = del; i < input.length - del; i++) {
    sum += input[i]
  }
  console.log(Math.round(sum / (input.length - (2 * del))));
}
