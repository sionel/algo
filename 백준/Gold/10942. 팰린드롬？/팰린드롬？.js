const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().replaceAll('\r', '').trim().split("\n")

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
arr.unshift(0)
const q = Number(input[2])

const palindrome = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0))

for (let i = 0; i <= n; i++) {
  palindrome[i][i] = 1
  if (arr[i] === arr[i - 1]) {
    palindrome[i - 1][i] = 1
  }
}
palindrome[0][0] = 0

const makePalindrome = () => {
  for (let i = 3; i <= arr.length; i++) {
    for (let start = 0; start <= arr.length - i; start++) {
      let end = start + i - 1
      if (arr[start] === arr[end] && palindrome[start + 1][end - 1]) {
        palindrome[start][end] = 1
      }
    }
  }
}

makePalindrome()
const result = []
for (let i = 3; i < 3 + q; i++) {
  let [start, end] = input[i].split(' ').map(Number)

  if (palindrome[start][start] && palindrome[start][end])
    result.push(1)
  else
    result.push(0)
}
console.log(result.join('\n'));