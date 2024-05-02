const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .split("\n");

const N = parseInt(input[0]);

const xs = [];
const ys = [];
const zs = [];
for (let i = 1; i < N + 1; i++) {
  const [x, y, z] = input[i].split(" ").map(Number);
  xs.push([i - 1, x]);
  ys.push([i - 1, y]);
  zs.push([i - 1, z]);
}

xs.sort((a, b) => a[1] - b[1]);
ys.sort((a, b) => a[1] - b[1]);
zs.sort((a, b) => a[1] - b[1]);

const graph = [];
for (let i = 0; i < N - 1; i++) {
  graph.push([xs[i][0], xs[i + 1][0], Math.abs(xs[i][1] - xs[i + 1][1])]);
  graph.push([ys[i][0], ys[i + 1][0], Math.abs(ys[i][1] - ys[i + 1][1])]);
  graph.push([zs[i][0], zs[i + 1][0], Math.abs(zs[i][1] - zs[i + 1][1])]);
}
graph.sort((a, b) => a[2] - b[2]);

const tree = Array.from({ length: N }, (_, i) => i);

const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);
  if (rootA < rootB) {
    tree[rootB] = rootA;
  } else {
    tree[rootA] = rootB;
  }
};
const find = (a) => (tree[a] = tree[a] === a ? a : find(tree[a]));

let sum = 0;
for (let i = 0; i < graph.length; i++) {
  const [a, b, cost] = graph[i];
  if (find(a) !== find(b)) {
    union(a, b);
    sum += cost;
  }
}

console.log(sum);
