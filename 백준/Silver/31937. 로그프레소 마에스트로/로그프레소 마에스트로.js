const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const inputs = fs.readFileSync(filePath).toString().replaceAll("\r", "").trim().split("\n");

const [N, M, K] = inputs[0].split(" ").map(Number);
const ics = inputs[1].trim().split(" ").map(Number);
const logs = inputs
  .slice(2)
  .map((arr) => arr.split(" ").map(Number))
  .sort(([a], [b]) => a - b);

for (const ic of ics) {
  const tmp = new Set([ic]);
  for (const [, a, b] of logs) {
    if (tmp.has(a)) tmp.add(b);
  }
  let cnt = 0;
  if (ics.length === tmp.size) {
    for (const ic of ics) {
      if (tmp.has(ic)) cnt++;
      else break;
    }
  }
  if (cnt === K) {
    console.log(ic);
    return;
  }
}
