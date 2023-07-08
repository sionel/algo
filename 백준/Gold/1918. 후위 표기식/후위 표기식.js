const fs = require("fs");
//"./input.txt , /dev/stdin"
const arr = fs.readFileSync('/dev/stdin').toString().trim().split('')

const operaters = []
const priority = {
  "(": 1,
  "+": 2,
  "-": 2,
  "*": 3,
  "/": 3,
}
let result = ''
arr.forEach(e => {
  if (e.charCodeAt() >= 65) {
    result += e
  } else if (e === "(") {
    operaters.push(e)
  } else if (e === ")") {
    while (operaters.length) {
      let operater = operaters.pop()
      if (operater === '(') break
      else result += operater
    }
  } else {
    while (operaters.length) {
      if (priority[e] <= priority[operaters[operaters.length - 1]]) {
        result += operaters.pop()
      } else break
    }
    operaters.push(e)
  }
});

while (operaters.length) {
  result += operaters.pop()
}

console.log(result);