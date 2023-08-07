const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const [n, w] = input[0].split(' ').map(Number)
const arr = Array(n + 1).fill(0)
for (let i = 1; i <= n - 1; i++) {
  const [n1, n2] = input[i].split(' ').map(Number)
  arr[n1]++
  arr[n2]++
}
let children = 0
for (let i = 2; i <= n; i++) {
  if (arr[i] === 1) children++
}
const value = w / children
console.log(value.toFixed(6))