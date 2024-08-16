const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const lines = input.slice(1, m + 1).map((line) => line.split(" ").map(Number));
const map = input.slice(m + 1).map((row) => row.split(" ").map(Number));

const tree = Array.from({ length: n }, (_, i) => i);

const find = (x) => {
  if (x === tree[x]) return x;
  return (tree[x] = find(tree[x]));
};
const union = (a, b) => {
  a = find(a);
  b = find(b);
  if (a < b) tree[b] = a;
  else tree[a] = b;
};

let sum = 0;
const added = [];

lines.forEach((line) => {
  const [a, b] = line;
  union(a - 1, b - 1);
  map[a - 1][b - 1] = 0;
  map[b - 1][a - 1] = 0;
});

const pq = map
  .reduce((acc, row, i) => {
    if (i === 0) return acc;
    row.forEach((el, j) => {
      if (j === 0) return;
      if (el !== 0) acc.push([i, j, el]);
    });
    return acc;
  }, [])
  .sort((a, b) => a[2] - b[2]);

pq.forEach((el) => {
  const [a, b, cost] = el;
  if (find(a) !== find(b)) {
    union(a, b);
    if (cost === 0) return;
    sum += cost;
    added.push([a + 1, b + 1]);
  }
});

console.log(sum, added.length);
added.forEach((el) => console.log(el.join(" ")));
