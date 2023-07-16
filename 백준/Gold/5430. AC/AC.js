const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().trim().split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();
const cases = Number(input())

for (let i = 0; i < cases; i++) {
  const queries = input().trim().split('')
  let start = 0
  let end = input() - 1
  const arr = JSON.parse(input())
  let isStart = true
  try {
    for (let j = 0; j < queries.length; j++) {
      const query = queries[j]
      if (query === 'R') {
        isStart = !isStart
      } else {
        if (start > end) throw e
        if (isStart) {
          start++
        } else {
          end--
        }
      }
    }

    let result = "["
    if (isStart) {
      for (let j = start; j <= end; j++) {
        result += arr[j] + ","
      }
    } else {
      for (let j = end; j >= start; j--) {
        result += arr[j] + ","
      }
    }

    console.log(result.length === 1 ? "[]" : result.slice(0, -1) + "]")
  }
  catch (error) {
    console.log("error");
  }
}