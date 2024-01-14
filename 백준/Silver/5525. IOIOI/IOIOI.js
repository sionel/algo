const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace("\r", "")
  .split("\n");

const pn = Number(input[0]);
const s = input[2];

let flag = false;
let answer = 0;
let temp = 0;
for (let i = 0; i < s.length; i++) {
  if (flag) {
    if (s[i] + s[i + 1] === "OI") {
      temp++;
      i++;
    } else {
      answer += temp - pn >= 0 ? temp - pn + 1 : 0;
      temp = 0;
      flag = false;
    }
  }
  if (s[i] === "I") flag = true;
}
answer += temp - pn >= 0 ? temp - pn + 1 : 0;
console.log(answer);
