const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
while (true) {
  let line = input()
  if (line === '.') break
  line = line.replace(/\w|\s/g, '')
  let stack = []
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '.') {
      console.log(stack.length === 0 ? 'yes' : 'no'); 1
      break
    }
    else if (line[i] === '(' || line[i] === '[') {
      stack.push(line[i])
    }
    else if (line[i] === ')') {
      if (stack[stack.length - 1] !== '(') {
        console.log('no');
        break
      }
      else stack.pop()
    } else {
      if (stack[stack.length - 1] !== '[') {
        console.log('no');
        break
      }
      else stack.pop()
    }
  }
}