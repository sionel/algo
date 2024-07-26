const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const words = input[1].split("");
let start = 0;
let max = 0;
let count = 0;
const alpha = Array(26).fill(0);
for (let end = 0; end < words.length; end++) {
  const endWord = words[end].charCodeAt() - 97;
  if (alpha[endWord]++ === 0) {
    count++;
  }
  while (count > n && end > start) {
    const startWord = words[start++].charCodeAt() - 97;
    if (alpha[startWord]) {
      if (--alpha[startWord] === 0) count--;
    }
  }
  max = Math.max(max, end - start + 1);
}

console.log(max);

