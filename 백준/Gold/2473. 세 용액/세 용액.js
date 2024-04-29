const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");


const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
arr.sort((a, b) => a > b ? 1 : -1)
let ans = Infinity;
const ansArr = Array.from({ length: 3 }, () => 0);
if(n === 3) {
  console.log(arr.join(' '))
  return
}else {
  for (let i = 0; i < n; i++) {
    let left = i + 1
    let right = n - 1
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      const abs = sum > 0 ? sum : -sum;
      if (abs < ans) {
        ans = abs
        ansArr[0] = arr[i];
        ansArr[1] = arr[left];
        ansArr[2] = arr[right];
      }
      if (sum < 0) left++;
      else right--;
    }
  }
  console.log(ansArr.join(" "));
}

