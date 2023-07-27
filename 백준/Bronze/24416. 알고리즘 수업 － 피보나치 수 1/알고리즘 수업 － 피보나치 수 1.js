const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString();

const n = Number(input)

// console.log(n);

const dp = new Array(n + 1).fill(0)
dp[1] = 1
dp[2] = 1

let dpCount = 0
for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2]
  dpCount++
}
let fiboCount = 0

const fibo = (n) => {
  if (n === 1 || n === 2) {
    fiboCount++
    return 1
  }
  return fibo(n - 1) + fibo(n - 2)
}

fibo(n)

console.log(fiboCount, dpCount);