const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let oneCount = arr.filter((num) => num === 1).length;
let otherNumbers = arr.filter((num) => num && num !== 1).sort((a, b) => b - a);
let temp = 0;
let flag = true;
while (otherNumbers.length || temp) {
  if (temp === 0) temp = otherNumbers.pop();

  if (oneCount !== 0) {
    oneCount--;
    temp -= 2;
    if (temp < 0) {
      flag = false;
      break;
    }
  } else {
    if (temp >= 3) {
      temp %= 3;
    } else if (temp === 2) {
      if (otherNumbers.length === 0) {
        flag = false;
        break;
      }
      temp = otherNumbers.pop();
      temp -= 1;
    }
  }
  if (temp === 1) {
    oneCount++;
    temp = 0;
  }
}

console.log(flag && oneCount === 0 ? "YES" : "NO");
