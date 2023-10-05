const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r")
  .split("\n");

const numbers = Array(20)
  .fill(0)
  .map((e, i) => i + 1);

for (let i = 0; i < 10; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  start--;
  end--;
  while (start < end) {
    [numbers[start], numbers[end]] = [numbers[end], numbers[start]];
    start++;
    end--;
  }
}

console.log(numbers.join(" "));
