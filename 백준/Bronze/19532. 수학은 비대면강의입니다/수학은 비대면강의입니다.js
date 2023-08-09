const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [a, b, c, d, e, f] = input[0].split(' ').map(Number)

let flag = false
for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      flag = true
      console.log(x, y)
      break
    }
  }
  if (flag) break
}


