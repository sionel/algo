const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().trim().split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();
const [N, M] = input().split(' ').map(Number)

const grapg = Array.from({ length: N + 1 }, () => new Set())
for (let i = 0; i < M; i++) {
  const [num, ...order] = input().split(' ').map(Number)
  for (let j = 1; j < num; j++) {
    grapg[order[j]].add(order[j - 1])
  }
}
const stack = []
const answer = []

for (let i = 1; i <= N; i++) {
  if (!grapg[i].size) {
    stack.push(i)
  }
}


while (stack.length) {
  const point = stack.pop()
  answer.push(point)
  for (let i = 1; i <= N; i++) {
    if (grapg[i].has(point)) {
      grapg[i].delete(point)
      if (!grapg[i].size) stack.push(i)
    }
  }
}
if (grapg.some(e => e.size)) {
  console.log(0);
} else {
  console.log(answer.join('\n'))
}