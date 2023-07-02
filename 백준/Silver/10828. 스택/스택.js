const fs = require("fs");
//"./input.txt , /dev/stdin"
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = parseInt(input.shift());
let answer = '', stack = [];
input.forEach((instruction) => {
  if (instruction.includes('push'))
    stack.push(Number(instruction.split(/\D/g).filter(Number).map(Number)[0]));
  else if (instruction.includes('pop'))
    answer += ((stack.length > 0 ? stack.pop() : -1) + '\n');
  else if (instruction.includes('top'))
    answer += ((stack.length > 0 ? stack[stack.length-1] : -1) + '\n');
  else if (instruction.includes('size'))
    answer += (stack.length + '\n');
  else
    answer += ((stack.length === 0 ? 1 : 0) + '\n');
})
console.log(answer.trim());