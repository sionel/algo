const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const str = input[0].replace('\r', '')
const palindrome = Array.from({ length: str.length }, (_, i) => Array.from({ length: str.length }, (_, j) => i === j ? 1 : 0))
const dp = Array.from({ length: str.length }, () => 0)

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) palindrome[i][i + 1] = 1
}

for (let i = 3; i <= str.length; i++) {
  for (let start = 0; start <= str.length - i; start++) {
    let end = start + i - 1
    if (str[start] === str[end] && palindrome[start + 1][end - 1]) {
      palindrome[start][end] = 1
    }
  }
}

for (let end = 0; end < str.length; end++) {
  dp[end] = Infinity
  for (let start = 0; start <= end; start++) {
    if (palindrome[start][end]) {
      dp[end] = Math.min(dp[end], dp[start - 1] + 1 || 1)
    }
  }
}

console.log(dp[str.length - 1]);