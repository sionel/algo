const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const tree = Array.from({ length: n + 1 }, (_, i) => i);
const union = (a, b) => {
  a = find(a);
  b = find(b);
  if (a === b) return;
  if (a < b) tree[b] = a;
  else tree[a] = b;
};

const find = (a) => (tree[a] = tree[a] === a ? a : find(tree[a]));

for (let i = 1; i < m + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  union(a, b);
}

for (let i = 1; i < n + 1; i++) {
  find(i);
}
const set = new Set(tree);
console.log(set.size - 1);
