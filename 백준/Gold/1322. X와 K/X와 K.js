const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();
let [X, K] = input.split(' ').map(Number)
let num = 1
const base = X.toString(2).split('').reverse()
const count = K.toString(2).split('').reverse()
const result = []
for (let i = 0, j = 0; i < count.length;) {
  if (base[j] === undefined || base[j] === '0') {
    result.push(count[i])
    j++, i++
  }
  else {
    result.push('0')
    j++
  }
}

const str = result.reverse().join('')
console.log(BigInt(`0b${str}`).toString());