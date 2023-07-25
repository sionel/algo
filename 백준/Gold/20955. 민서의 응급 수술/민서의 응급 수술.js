const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().trim().split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();

const [N, M] = input().split(" ").map(Number);

const tree = Array.from({ length: N + 1 }, (_, i) => i);
let result = 0;
// console.log(tree);
const find = (x) => {
  if (tree[x] === x) return x;
  return (tree[x] = find(tree[x]));
};
const union = (a, b) => {
  const x = find(a);
  const y = find(b);

  tree[y] = x
};
for (let i = 0; i < M; i++) {
  const [a, b] = input().split(" ").map(Number);
  if (find(a) === find(b)) result++;
  else {
    union(a, b)
  }
}

for (let i = 1; i <= N; i++) {
  if (i === find(i)) result++
}
console.log(result-1);