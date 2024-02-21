const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .split("\n");

const N = Number(input[0])
const M = Number(input[1])
const arr = []
for(let i = 0 ; i < M ; i++){
  arr.push(input[i+2].split(' ').map(Number))
}
const tree = Array.from({ length: N + 1 }, (_, i) => i);

const find = (x) => {
  if (tree[x] === x) return x;
  return (tree[x] = find(tree[x]));
};
const union = (a, b) => {
  const x = find(a);
  const y = find(b);

  if (x < y) tree[y] = x
  else tree[x] = y
};

arr.sort((a,b) => a[2] - b[2])
let sum = 0
for (let i = 0; i < arr.length; i++) {
  const [x, y, c] = arr[i]
  if (find(x) === find(y)) continue
  else {
    union(x, y)
    sum += c
  }
}
find(1)
console.log(sum);