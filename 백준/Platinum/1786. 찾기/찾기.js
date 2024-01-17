const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().replaceAll('\r', '').split('\n');

const [T, P] = input

const makeTable = (pattern) => {
  const table = Array.from({ length: pattern.length }, () => 0);
  let j = 0;
  for (let i = 1; i < pattern.length; i++) {
    while (j > 0 && pattern[i] !== pattern[j]) j = table[j - 1]; 
    if (pattern[i] === pattern[j]) table[i] = ++j; 
  }
  return table
}

const solution = (T, P) => {
  const table = makeTable(P)
  let position = []
  let j = 0
  for (let i = 0; i < T.length; i++) {
    while (j > 0 && T[i] !== P[j]) j = table[j - 1]
    if (T[i] === P[j]) {
      if (j === P.length - 1) {
        position.push(i - j + 1)
        j = table[j]
      } else {
        j++
      }
    }
  }
  console.log(position.length);
  console.log(position.join(' '));
}

solution(T, P)