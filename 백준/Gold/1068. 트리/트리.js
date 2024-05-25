const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const deleted = Number(input[2]);
const tree = Array.from({ length: n }, () => []);
const parent = [];

for (let i = 0; i < n; i++) {
  if (i === deleted) continue;
  if (arr[i] === -1) {
    parent.push(i);
    continue;
  }
  tree[arr[i]].push(i);
}

const dfs = (idx) => {
  if (tree[idx].length === 0) return 1;
  else {
    let cnt = 0;
    for (let i = 0; i < tree[idx].length; i++) {
      cnt += dfs(tree[idx][i]);
    }
    return cnt;
  }
};
let cnt = 0;
for (let i = 0; i < parent.length; i++) {
  if (parent[i] === deleted) continue;
  cnt += dfs(parent[i]);
}
console.log(cnt);
