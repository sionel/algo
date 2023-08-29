const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");

const [n, c] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const slice1 = arr.slice(0, arr.length >> 1);
const slice2 = arr.slice(arr.length >> 1);
const sum1 = [];
const sum2 = [];
const map1 = {};
const map2 = {};
const dfs = (index, sum, arr, sumArr, map) => {
  if (index === arr.length) {
    sumArr.push(sum);
    map[sum] = (map[sum] || 0) + 1;
  } else {
    dfs(index + 1, sum, arr, sumArr, map);
    dfs(index + 1, sum + arr[index], arr, sumArr, map);
  }
};

const search = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;
  let pivot = 0;
  while (left <= right) {
    pivot = Math.floor((left + right) / 2);
    if (value > arr[pivot]) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
  return arr[left];
};

dfs(0, 0, slice1, sum1, map1);
dfs(0, 0, slice2, sum2, map2);
sum1.sort((a, b) => a - b);
sum2.sort((a, b) => a - b);
let result = 0;
const set = new Set(sum1);
for (const i of set) {
  const need = c - i;
  const searchNum = search(sum2, need);
  if (searchNum === need) {
    result += map1[i] * map2[searchNum];
  }
}

console.log(c ? result : result - 1);