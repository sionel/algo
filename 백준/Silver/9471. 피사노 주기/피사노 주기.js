const fs = require("fs");
//"./input.txt , /dev/stdin"
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()
let n1 = 0, n2 = 1
while (input.length) {
  const [p, m] = input.shift().split(' ').map(e => Number(e))
  let count = 0
  do {
    [n1, n2] = [n2, (n1 + n2) % m]
    count++
  } while (n1 !== 0 || n2 !== 1);
  console.log(p , count)
}