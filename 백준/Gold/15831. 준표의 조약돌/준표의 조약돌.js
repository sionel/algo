
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const [n, b, w] = input[0].split(' ').map(Number)
const load = input[1].split('')

let black = 0
let white = 0
let left = 0
let right = 0
let ans = 0

for (let i = 0; i < n; i++) {
  const rStr = load[i]
  right++
  if (rStr === 'W') {
    white++
  } else {
    black++
    while (black > b) {
      const lStr = load[left]
      if (lStr === 'W') {
        white--
      } else {
        black--
      }
      left++
    }
  }
  if (white >= w) ans = Math.max(ans, right - left)

}


console.log(ans);