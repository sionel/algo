const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");


const [n, m] = input[0].split(' ').map(Number)
const gender = input[1].split(' ')
const map = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => Infinity))
const costs = []

const tree = Array.from({ length: n + 1 }, (_, i) => i);

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



for (let i = 2; i < m + 2; i++) {
  const [start, end, cost] = input[i].split(' ').map(Number)
  if (gender[start - 1] === gender[end - 1]) continue
  map[start][end] = Math.min(map[start][end], cost)
  map[end][start] = Math.min(map[end][start], cost)
}
for (let i = 1; i <= n; i++) {
  for (let j = i + 1; j <= n; j++) {
    if (map[i][j] !== Infinity) {
      costs.push([i, j, map[i][j]])
    }
  }
}

costs.sort((a, b) => a[2] - b[2])
let sum = 0
for (let i = 0; i < costs.length; i++) {
  const [x, y, c] = costs[i]
  if (find(x) === find(y)) continue
  else {
    union(x, y)
    sum += c
  }
}
let value = find(1)
let flag = false
for(let i = 2 ; i <= n ; i++){
  if(value !== find(i)) {
    flag = true
    break
  }
}

console.log(flag ? -1 : sum);