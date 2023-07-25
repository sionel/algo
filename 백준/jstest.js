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
};
for (let i = 0; i < M; i++) {
  const [a, b] = input().split(" ").map(Number);
  if (find(a) === find(b)) result++;
  else {
  }
}

// const dfs = (n) => {
//   const stack = [[0, n]];
//   while (stack.length) {
//     const [parent, child] = stack.pop();
//     if (visit[start]) result++;
//     else {
//       visit[start] = true;
//       const arr = [...obj[start]];
//       stack.push(...obj[start]);
//     }
//   }
// };

// for (let i = 1; i <= N; i++) {
//   if (!visit[i]) {
//     dfs(i);
//     result++;
//   }
// }

// console.log(result - 1);
