const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [str1, str2] = input;
const arr = Array.from({ length: str1.length + 1 }, () =>
  Array.from({ length: str2.length + 1 }, () => 0)
);

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      arr[i][j] = arr[i - 1][j - 1] + 1;
    } else {
      arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
    }
  }
}
console.log(arr[str1.length][str2.length]);
