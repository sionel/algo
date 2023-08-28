const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().replaceAll('\r', '').trim().split("\n")

const n = Number(input[0])

const eratos = (n) => {
  const isPrime = Array(n + 1).fill(true)
  const prime = []
  isPrime[0] = false
  isPrime[1] = false
  for (let i = 2; i < n + 1; i++) {
    if (!isPrime[i]) continue
    prime.push(i)
    for (let j = i * 2; j <= n + 1; j += i) {
      isPrime[j] = false
    }
  }
  return prime
}


const prime = eratos(n)
let left = 0
let sum = 0
let result = 0
for (let i = 0; i < prime.length; i++) {
  sum += prime[i]
  while (sum > n) {
    sum -= prime[left++]
  }
  if (sum === n) {
    result++
  }
}
console.log(result);