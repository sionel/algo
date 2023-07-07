const fs = require("fs");
//"./input.txt , /dev/stdin"
let input = BigInt(fs.readFileSync('/dev/stdin'))
const dp = [0, 1]

for (let i = 0; i <= 1500000; i++) {
  dp.push((dp[i] + dp[i + 1]) % 1000000)
}
console.log(dp[input % BigInt(1500000)])
