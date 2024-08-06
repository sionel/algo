const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const row = [];
for (let i = 1; i <= n; i++) {
  const [a, b, c, d, e, f] = input[i].split(" ").map(Number);
  const temp = [0, 0, 0, 0, 0, 0, 0];
  temp[a] = f;
  temp[b] = d;
  temp[c] = e;
  temp[d] = b;
  temp[e] = c;
  temp[f] = a;
  row.push(temp);
}
const makeLine = (depth, target) => {
  if (depth === n) return 0;
  const opposite = row[depth][target];
  let max = 0;
  for (let i = 6; i >= 1; i--) {
    if (i === target || i === opposite) continue;
    max = Math.max(i, max);
    break;
  }

  return max + makeLine(depth + 1, opposite);
};
let max = 0;
for (let i = 1; i <= 6; i++) {
  max = Math.max(makeLine(0, i), max);
}

console.log(max);