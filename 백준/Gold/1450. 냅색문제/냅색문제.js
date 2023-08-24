const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().replaceAll('\r', '').trim().split("\n")

const [n, c] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
const slice1 = arr.slice(0, arr.length >> 1)
const slice2 = arr.slice(arr.length >> 1)

const sum1 = []
const sum2 = []

const dfs = (index, sum, arr, sumArr) => {
  if (index === arr.length) {
    sumArr.push(sum)
  } else {
    dfs(index + 1, sum, arr, sumArr)
    dfs(index + 1, sum + arr[index], arr, sumArr)
  }
}

const search = (arr, value) => {
  let left = 0
  let right = arr.length - 1
  let pivot = 0
  while (left <= right) {
    pivot = Math.floor((left + right) / 2);
    if (value >= arr[pivot]) {
      left = pivot + 1
    } else {
      right = pivot - 1
    }
  }
  return left
}

dfs(0, 0, slice1, sum1)
dfs(0, 0, slice2, sum2)

sum1.sort((a, b) => a - b)
sum2.sort((a, b) => a - b)

let result = 0
for (let i = 0; i < sum1.length; i++) {
  const searchNum = c - sum1[i]
  result += search(sum2, searchNum)
}
console.log(result);
