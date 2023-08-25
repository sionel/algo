const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().replaceAll('\r', '').trim().split("\n")

const str = input[0]
const boom = input[1]

const stack = []
for (let i = 0; i < str.length; i++) {
  const s = str[i]
  stack.push(s)
  if (s === boom[boom.length - 1] && stack.slice(stack.length - boom.length).join('') === boom) {
    let count = boom.length
    while (count--) {
      stack.pop()
    }
  }
}
if(stack.length){
  console.log(stack.join(''));
}else {
  console.log('FRULA');
}