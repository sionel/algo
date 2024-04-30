/**
 * 반례
  10 2 2
  5 8 9
  2 1
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");


const [n, m, k] = input[0].split(' ').map(Number)

const minsuCards = input[1].split(' ').map(Number).sort((a, b) => a-b)
const cheolsooCards = input[2].split(' ').map(Number)
const tree = Array.from({ length: m }, (_, i) => i)


function find(idx) {
  if (tree[idx] === idx) {
    tree[idx] = idx + 1;
    return idx;
  }
  return find(tree[idx]);
}

function upperBound({ arr, end = arr.length, start = 0, target, toValue }) {
  if (start >= end) return start;
  const mid = Math.floor((start + end) / 2);
  const midValue = toValue(arr[mid], mid);
  if (midValue <= target)
    return upperBound({ arr, target, start: mid + 1, end, toValue });
  else return upperBound({ arr, target, start, end: mid, toValue });
}

const result = []
for (let i = 0; i < k; i++) {
  const num = cheolsooCards[i]
  const position = upperBound({
    arr: minsuCards,
    target: num,
    toValue: (e) => e
  })
  const temp = find(position)
  result.push(minsuCards[temp])
}

console.log(result.join('\n'));