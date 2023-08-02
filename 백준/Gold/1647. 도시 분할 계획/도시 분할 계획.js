const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number)
const costs = []
for (let i = 0; i < m; i++) {
  const [x, y, c] = input[i].split(' ').map(Number)
  costs.push([x, y, c])
}

costs.sort((a, b) => a[2] - b[2])

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

let sum = 0
let max = 0
for (let i = 0; i < m; i++) {
  const [x, y, c] = costs[i]
  if (find(x) === find(y)) continue
  else {
    union(x, y)
    sum += c
    max = Math.max(max, c)
  }
}
console.log(sum - max);