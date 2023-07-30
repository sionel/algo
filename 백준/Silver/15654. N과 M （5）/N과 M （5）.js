const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number)

const arr = input[1].split(' ').map(Number)
arr.sort((a, b) => a - b)
const result = []
const dp = (n, m, arr) => {
  if (m === M) {
    console.log(result.join(' '));
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i])
      dp(i + 1, m + 1, [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)])
      result.pop()
    }
  }
}

dp(0, 0, arr)